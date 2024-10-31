import React, { useEffect, useState } from "react";
// import { ImageInput } from "./ImageInput";
// import { AdminModalInput } from "./AdminModalInput1";
// import { Button } from "./Button";
import Image from "next/image";
import { Button } from "@radix-ui/themes";


interface Props {
  p?: string;
  p1?: string;
  p2?: string;
  mod?: string;
  btn?: string;
  hidden?: boolean;
  categoryRef?: any;
  arr?:string[],
  ButtonOnClick?: () => void;
  onClickClose?: () => void;
  getImgUrl?: any;
  slugRef?: any;
  imgRef?: any;
  cuisineRef?: any;
  priceRef?: any;
  deliveryMinRef?: any;
  addressRef?: any;
  categoryIdRef?: any;
  resNameRef?: any;
  productNameRef?:any;
  productDescRef?:any;
  productPriceRef?:any;
  productRestaurantRef?:any;
  offerNameRef?:any;
  offerDescRef?:any
  // --
  productData?: any;
  // --
}

export const Cart = ({
  p = "Add Product",
  p1 = "Upload your product image",
  p2 = "Add your Product description and necessary information",
  mod = "1",
  arr,
  btn = "Create Product",
  hidden = true,
  ButtonOnClick,
  onClickClose,
  categoryRef,
  getImgUrl,
  slugRef,
  imgRef,
  cuisineRef,
  priceRef,
  deliveryMinRef,
  addressRef,
  categoryIdRef,
  resNameRef,
  productNameRef,
  productDescRef,
  productPriceRef,
  productRestaurantRef,
  offerNameRef,
  offerDescRef,
  // --
  productData
  // --
 
}: Props) => {
  const [imgUrl, setImgUrl] = useState<any>("");

  useEffect(() => {
    if (productData) {
      if (productNameRef?.current) productNameRef.current.value = productData.name;
      if (productDescRef?.current) productDescRef.current.value = productData.description;
      if (productPriceRef?.current) productPriceRef.current.value = productData.price.toString();
      if (productRestaurantRef?.current) productRestaurantRef.current.value = productData.rest_id;
      setImgUrl(productData.img_url);
      getImgUrl(productData.img_url);
    }
  }, [productData]);

  return (
    <div
      className={` fixed  z-10  w-[550px]  bg-white   sm:pl-12 ${
        hidden ? "  -right-full" : "right-0"
      }  transition-all duration-500 top-0 h-screen`}
      
    >
      <button
        onClick={onClickClose}
        
        className="   absolute  right-5 sm:left-0  "
      >
        <Image
        className=" bg-pink rounded-full    absolute  right-5 sm:left-0  top-7 w-7 h-7 cursor-pointer"
        
        alt="close-icon" height={10} width={10} src='/blackClose.svg' />
      </button>
      <div className=" bg-darkblue30   flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14  max-h-screen   overflow-y-auto h-screen">
        <div>
          <p className=" text-mainColor font-medium text-2xl  mb-2">{p}</p>
            <hr className="text-gray"/>
        </div>
      </div>
    </div>
  );
};