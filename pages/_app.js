import "../styles/globals.css";
import "@fontsource/inter";
import Head from "next/head";
import Layout from "../components/layout";
import { CartProvider } from "../context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            theme="colored"
          />
        </Layout>
      </CartProvider>
    </>
  );
}

export default MyApp;
