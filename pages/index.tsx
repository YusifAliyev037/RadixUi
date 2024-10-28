import Image from "next/image";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import Head from "next/head";
import MetaSeo from "@/utils/MetaSeo";
import Header from "@/components/Header";



export default function Home() {
  return (
   <>
    <Head>
      <title>Home</title>
      <MetaSeo title="CeramicShop" desc="Welcome to Home page!"/>
    </Head>
    <div>
      <Header/>
      <div className="bg-mainColor flex justify-between px-32 py-20">
        <div className="flex flex-col gap-6">
          <div className="text-white text-xl">Welcome to ceramic shop</div>
          <div>
            <h1 className="text-white text-7xl font-times pr-[400px]">
            Elevate Your Space with Ceramic Elegance.
            </h1>
            </div>
          <div className="text-white font-times text-3xl">Starting from just $149.00</div>
          <div>
            <Button variant="outline" color="amber" size='4' >
              Shop Now
            </Button>
          </div>
        </div>
        <div>
          <Image alt="main" src='/mainimg.jpg' width={600} height={600}/>
        </div>
      </div>
      <div>
        <div className="px-32 pt-20">
          <p className="text-mainColor text-xl mb-10">About Ceramic Shop</p>
          <p className="text-mainColor font-times text-5xl">The versatility of ceramics is what makes them truly remarkable, with their presence in various forms such as stoneware and porcelain.</p>
        </div>
        <div>
          <div>
            <Image alt="img1" src='/img1.jpg' width={200} height={200}/>
          </div>
          <div></div>
        </div>
      </div>
    </div>
   </>
  );
}
