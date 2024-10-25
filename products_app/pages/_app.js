import Navbar from "@/components/Navbar";
import sts from "../styles/navbar.module.css"
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (<div>
    <Navbar />
  <Component {...pageProps} />
  <footer className={sts.footer}>This is footer</footer>
</div>);
}
