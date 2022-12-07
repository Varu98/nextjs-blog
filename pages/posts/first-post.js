import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          <Script
            strategy="lazyOnload"
            src="https://connect.facebook.net/en_US/sdk.js"
            onLoad={() =>
              console.log(
                `script loaded correctly, window.FB has been populated`
              )
            }
          />
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to Home</Link>
        </h2>
      </Layout>
    </>
  );
};

export default FirstPost;
