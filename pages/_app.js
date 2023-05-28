import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

export default function MRCNapp({ Component, pageProps}) {
  return (
      <Layout>
        <Seo />
        <Component {...pageProps} />
      </Layout>
  )
}
