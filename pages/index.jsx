import React, { useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import BestSelling from "@/components/bestSelling";
import CategoriesBrowse from "@/components/categoriesBrowse";
import FlashSale from "@/components/flashSale";
import NewArrival from "@/components/newArrival";
import OurProducts from "@/components/ourProducts";
import SaleHunter from "@/components/saleHunter";
import Services from "@/components/services";
import Slider from "@/components/slider";

import { categories } from "@/data/categoriesItems.jsx";
import { axiosServer } from "@/helper/axios/axiosServer";
import useKeySuggest from "@/store/keySuggest/useKeySuggest";

export default function Home({ products, bestSelling }) {
  const addKeySuggest = useKeySuggest((state) => state.addKeySuggest);

  useEffect(() => {
    if (products?.length > 0) {
      addKeySuggest(products);
    }
  }, [addKeySuggest, products]);

  return (
    <>
      <Head>
        <meta name="E-Shop-head" content="1" />
        <title>E-Shop | specializes in technology sales</title>
        <meta name="E-Shop-head" content="1" />
        <meta content="provides technological equipment and electronic equipment" name="description" key="desc" />
        <meta name="E-Shop-head" content="1" />
        <meta content="E-Shop | specializes in technology sales" property="og:title" />
        <meta name="E-Shop-head" content="1" />
        <meta content="provides technological equipment and electronic equipment" property="og:description" />
        <meta name="E-Shop-head" content="1" />
        <meta content="/assets/images/banner/banner1.jpg" property="og:image" />
      </Head>

      <section>
        <Slider />
      </section>

      <section>
        <FlashSale products={products} />
      </section>

      <section>
        <CategoriesBrowse categories={categories} />
      </section>

      <section>
        <BestSelling bestSelling={bestSelling} />
      </section>

      <section>
        <SaleHunter />
      </section>

      <section>
        <OurProducts products={products} />
      </section>

      <section>
        <NewArrival />
      </section>

      <section>
        <Services />
      </section>
    </>
  );
}

Home.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  bestSelling: PropTypes.instanceOf(Array).isRequired,
};

export async function getServerSideProps() {
  try {
    const [response, bestSelling] = await Promise.all([
      axiosServer.get("/products"),
      axiosServer.get("/products?page=1&pageSize=4"),
    ]);

    return {
      props: {
        products: response.data.payload || [],
        bestSelling: bestSelling.data.payload || [],
      },

      // revalidate: 24 * 60 * 60,
    };
  } catch (error) {
    return {
      // notFound: true,
      props: {
        products: [],
        bestSelling: [],
      },
    };
  }
}
