import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="h-full bg-white dark:bg-gray-dark ease-in-out duration-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
