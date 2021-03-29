import "../styles/layout.scss";
import "../styles/globals.css";

import "../styles/box_ofer.css";


import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import { AnimateSharedLayout } from "framer-motion";


// import { getStrapiMedia } from "../lib/media";
// import { fetchAPI } from "../lib/api";


// // Store Strapi Global object in context
// export const GlobalContext = createContext({});


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  );
}
