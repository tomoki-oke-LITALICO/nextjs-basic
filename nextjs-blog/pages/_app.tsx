import { FC } from "react";
import "../styles/global.css";
import { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
