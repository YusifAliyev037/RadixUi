import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";


export default function App({ Component, pageProps }: AppProps) {

  return(
    <Theme>
      <Component {...pageProps} />
    </Theme>
  ) 

}
