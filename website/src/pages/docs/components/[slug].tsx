import React, { useEffect } from "react";
import fs from "fs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import Prism from "prismjs";
import { mdxComponents } from "@/components/mdx-components/mdx-components";
import Head from "next/head";
import { useRouter } from "next/router";

interface ComponentDocProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    id: string;
    title: string;
    category: string;
    package: string;
    description: string;
  };
}

const ComponentDoc = ({ source, frontMatter }: ComponentDocProps) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{`Zephyr3D - ${frontMatter.title}`}</title>
      </Head>
      <div className="flex flex-col flex-shrink w-full h-full justify-center gap-5">
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.description}</p>

        <MDXProvider components={mdxComponents}>
          <MDXRemote {...source} />
        </MDXProvider>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content/docs/components")
  );
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "src/content/docs/components", `${slug}.mdx`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  };
};

export default ComponentDoc;
