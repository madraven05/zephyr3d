// src/components/MDXProviderWrapper.tsx
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

const components = {
  h1: () => <h1 className="text-4xl font-bold my-4" />,
  p: () => <p className="my-2 text-lg" />,
  a: () => <a className="text-blue-500 hover:underline" />,
  // Add more custom components and styles as needed
};

const MDXProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;
