import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageView } from "../utils/gtag";
import '../styles/main.css';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

// const App = function ({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       pageView(url);
//     };
//     router.events.on("routeChangeComplete", handleRouteChange);
//     return () => {
//       router.events.off("routeChangeComplete", handleRouteChange);
//     };
//   }, []);

//   return <Component {...pageProps} />;
// };

export default App;
