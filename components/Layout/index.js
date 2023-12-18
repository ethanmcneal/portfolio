import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
