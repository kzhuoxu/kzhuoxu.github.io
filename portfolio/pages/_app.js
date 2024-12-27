import "../styles/custom.scss";
import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyPortfolio({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Georgia Xu's | Data Science and Beyond</title>
        <meta name="description" content="Portfolio Homepage"/>
        <link rel="icon" href="/analysis.png" />
      </Head>
      <NavBar />
      <div className="pt-12">
          <Component {...pageProps} />
        </div>
      <Footer id="footer"/>
    </div>
  );
}

export default MyPortfolio;