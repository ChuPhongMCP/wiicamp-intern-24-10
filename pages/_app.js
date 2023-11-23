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
        <meta name="E-Shop-head" content="1" />
        <title>E-Shop | specializes in technology sales</title>
        <meta name="E-Shop-head" content="1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="E-Shop-head" content="1" />
        <meta content="provides technological equipment and electronic equipment" name="description" key="desc" />
        <meta name="E-Shop-head" content="1" />
        <meta content="E-Shop | specializes in technology sales" property="og:title" />
        <meta name="E-Shop-head" content="1" />
        <meta content="provides technological equipment and electronic equipment" property="og:description" />
        <meta name="E-Shop-head" content="1" />
        <meta content="/assets/images/banner/banner1.jpg" property="og:image" />
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
