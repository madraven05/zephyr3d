import React, { useEffect, useState } from "react";
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
import FloatingTOC, { TOCItem } from "@/components/floating-toc";

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
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3");
    const items: TOCItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.substring(1), 10),
    }));

    setTocItems(items);
  }, []);

  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="">
      <Head>
        <title>{`Zephyr3D - ${frontMatter.title}`}</title>
      </Head>
      <div className="flex flex-col gap-5">
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.description}</p>

        <MDXProvider components={mdxComponents}>
          <MDXRemote {...source} />
        </MDXProvider>
        {tocItems.length > 0 ? <FloatingTOC items={tocItems} /> : null}
      </div>
    </div>
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
