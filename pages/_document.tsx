import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-slate50 dark:bg-gray900 duration-300 ease-in-out">
        <Head />
        <body className="bg-slate50 dark:bg-gray900 duration-300 ease-in-out">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
