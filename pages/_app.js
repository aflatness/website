import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageView } from "../utils/gtag";
import '../styles/main.css';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
