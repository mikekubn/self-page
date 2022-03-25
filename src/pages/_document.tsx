import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body className="h-full bg-white dark:bg-gray900 ease-in-out duration-700 text-gray500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
