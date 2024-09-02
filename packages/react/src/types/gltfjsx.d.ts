declare module "@react-three/gltfjsx" {
  interface ParserOptions {
    types?: boolean;
    verbose?: boolean;
    // Add other options if available
  }

  export function parser(
    input: string,
    options?: ParserOptions
  ): Promise<string>;
}
