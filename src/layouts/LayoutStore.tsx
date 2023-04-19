import Navigation from "@/components/navigations/StoreNavigation";
import Head from "next/head";
import React from "react";

interface ILayoutStore {
  title: string;
  description: string;
  children: React.ReactNode;
}

const LayoutStore = (props: ILayoutStore) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navigation />
      {props.children}
    </>
  );
};

export default LayoutStore;
