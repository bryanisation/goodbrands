//@ts-nocheck
import Head from "next/head";

function Meta({
  page,
  description,
}: { page?: string, description?: string }) {
  return (
    <Head>
      <title>{`
        Proffessional Designers | ${page ? page : "Interior Decor"}
      `}</title>
      <link rel="icon" href="/favicon.ico"></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8"></meta>
      <meta
        name="description"
        content={`${description
          ? description
          : "Interir Decor is a design agency based in Nairobi, dedicated to acquiring and delivering quality realeste products and services that help clients achieve their personal and business objectives. We are are dedicated to creating positive customer experiences."
          }`}
      ></meta>
      <meta
        name="msapplication-TileImage"
        content="https://d2c1uap9jjtsxz.cloudfront.net/7215/8453/2828/Rawnet_Favicon.png"
      ></meta>
      <meta name="theme-color" content="rgb(0, 12, 54)"></meta>
      <link
        rel="shortcut icon"
        href="../d2c1uap9jjtsxz.cloudfront.net/3115/8582/2375/Rawnet_Favicon.png"
        type="image/x-icon"
      ></link>
      <link
        rel="icon"
        href="../d2c1uap9jjtsxz.cloudfront.net/3115/8582/2375/Rawnet_Favicon.png"
        type="image/x-icon"
      ></link>
      <link
        rel="apple-touch-icon"
        href="../d2c1uap9jjtsxz.cloudfront.net/3115/8582/2375/Rawnet_Favicon.png"
      ></link>
      <link rel="canonical" href="index.html"></link>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:title"
        content={`Proffessional Interior Designers | ${page ? page : "Interior Decor"}`}></meta>
      <meta
        property="og:description"
        content={`${description
          ? description
          : "Interior Decor is a design agency based in Nairobi, dedicated to acquiring and delivering quality realeste products and services that help clients achieve their personal and business objectives. We are are dedicated to creating positive customer experiences."
          }`}
      ></meta>
      <meta property="og:url" content="https://www.interiordecor.co.ke/"></meta>
      <meta property="og:site_name" content="interiordecor"></meta>
      <meta property="og:ttl" content="2419200"></meta>
      {/* <meta property="og:image" content="https://d2c1uap9jjtsxz.cloudfront.net/1200x630/6515/8532/4510/homepage_banner.jpg"></meta>        */}
    </Head>
  );
};

export default Meta;
