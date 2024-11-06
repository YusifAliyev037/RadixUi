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
      <div className="bg-mainColor flex md:flex-row flex-col justify-between md:px-32 md:py-20 px-4 py-5">
        <div className="flex flex-col gap-6">
          <div className="text-white text-xl md:text-left text-center">Welcome to ceramic shop</div>
          <div>
            <h1 className="text-white text-7xl font-times md:pr-[400px] md:text-left text-center">
            Elevate Your Space with Ceramic Elegance.
            </h1>
            </div>
          <div className="text-white font-times text-3xl md:text-left text-center">Starting from just $149.00</div>
          <div>
            <Button variant="outline" style={{ cursor: 'pointer', marginLeft:'100px' }}   color="amber" size='4' >
              Shop Now
            </Button>
          </div>
        </div>
        <div>
          <Image alt="main" src='/mainimg.jpg' className="md:mt-0 mt-7" width={600} height={600}/>
        </div>
      </div>
      <div>
        <div className="md:px-32 md:pt-20 px-4 py-5">
          <p className="text-mainColor text-xl mb-10 md:text-left text-center">About Ceramic Shop</p>
          <p className="text-mainColor font-times text-5xl md:text-left text-center">The versatility of ceramics is what makes them truly remarkable, with their presence in various forms such as stoneware and porcelain.</p>
        </div>
        <div className="mt-16 md:mx-32 md:flex gap-28">
          <div>
            <Image alt="img1" className="hidden md:block" src='/img1.jpg' width={550} height={550}/>
          </div>
          <div className="flex flex-col gap-8 md:w-[500px] md:px-0 px-4">
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
      <div className="md:px-32 md:pt-20 px-4 md:mt-0 mt-10">
          <p className="text-mainColor text-xl mb-10 md:text-left text-center">Most Popular</p>
          <p className="text-mainColor font-times text-5xl md:text-left text-center">Discover the Latest Additions at Your Top Choice Flower Shop</p>
        </div>
        <div className="md:mx-32 md:mt-20 mx-4">
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
