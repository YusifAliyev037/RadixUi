import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";


export default function App({ Component, pageProps }: AppProps) {

  return(
    <Provider store={store}>
    <Theme>
      <Component {...pageProps} />
    </Theme>
    </Provider>
  ) 

}
