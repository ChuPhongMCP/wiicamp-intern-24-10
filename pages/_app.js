import React from "react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import PropTypes from "prop-types";

import Layout from "@/components/layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>E-Shop | specializes in technology sales</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta content="provides technological equipment and electronic equipment" name="description" key="desc" />
        <meta content="E-Shop | specializes in technology sales" property="og:title" />
        <meta content="provides technological equipment and electronic equipment" property="og:description" />
        <meta content="https://pub-50cd0051de0b47509baf9c4fc482606a.r2.dev/demobackend/meta.jpg" property="og:image" />
      </Head>

      <SessionProvider session={session} refetchOnWindowFocus={false} refetchWhenOffline={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
