import Image from "next/image";
import { Button} from "@radix-ui/themes";
import Head from "next/head";
import MetaSeo from "@/utils/MetaSeo";
import Header from "@/components/Header";
import Cards from "@/components/Card";
import Footer from "@/components/Footer";



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
            <Button variant="outline" style={{ cursor: 'pointer' }}  color="amber" size='4' >
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
        <div className="mt-16 mx-32 flex gap-28">
          <div>
            <Image alt="img1" src='/img1.jpg' width={550} height={550}/>
          </div>
          <div className="flex flex-col gap-8 w-[500px]">
            <Image alt="img2" className="mt-20" src='/img2.jpg' width={550} height={550}/>
            <h3 className="font-times text-mainColor text-2xl pr-32">Welcome to Ceramic Shop, where passion meets craftsmanship to bring you a world of timeless beauty and creativity.</h3>
            <p>Our journey is steeped in the art of ceramics, where each piece tells a unique story. Get to know the heart and soul behind our store.</p>
            <Button style={{ cursor: 'pointer' }} variant="outline" color="amber" size='4' >
              Read More
            </Button>
          </div>
        </div>
      </div>
      <div>
      <div className="px-32 pt-20">
          <p className="text-mainColor text-xl mb-10">Most Popular</p>
          <p className="text-mainColor font-times text-5xl">Discover the Latest Additions at Your Top Choice Flower Shop</p>
        </div>
        <div className="mx-32 mt-20">
        <Cards/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
   </>
  );
}
