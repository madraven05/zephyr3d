import React, {
  DetailedHTMLProps,
  DetailsHTMLAttributes,
  HTMLAttributes,
} from "react";

type CodeBlockProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return <code>{children}</code>;
};

export default CodeBlock;
