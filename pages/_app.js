import "../styles/layout.scss";

import "../styles/globals.css";
import "../styles/components/slider.scss";

import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import { AnimateSharedLayout } from "framer-motion";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  );
}
