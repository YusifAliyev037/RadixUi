import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fillCount } from "@/redux/global/globalSlice";


interface Props {
  p?: string;
  hidden?: boolean;
  onClickClose?: () => void;
}
interface Product {
    id: number;
    image: string;
    name: string;
    price: string;
  }

export const Cart = ({
  p = "Add Product",
  hidden = true,
  onClickClose,

}: Props) => {
    const dispatch = useDispatch()

    const product = useSelector((state: RootState) => state.global.data) as Product[]
  const itemCount = product.length;
  dispatch(fillCount(itemCount))



  return (
    <div
      className={` fixed  z-10  md:w-[550px]  bg-white   sm:pl-12 ${
        hidden ? "  -right-full" : "right-0"
      }  transition-all duration-500 top-0 h-screen`}
      
    >
      <button
        onClick={onClickClose}
        
        className="   absolute  right-5 sm:left-0  "
      >
        <Image
        className="  rounded-full    absolute  right-5 sm:left-0  top-7 w-7 h-7 cursor-pointer"
        
        alt="close-icon" height={10} width={10} src='/blackClose.svg' />
      </button>
      <div className=" bg-darkblue30   flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14  max-h-screen   overflow-y-auto h-screen">
        <div>
          <p className=" text-mainColor font-medium text-2xl  mb-2">{p}</p>
            <hr className="text-gray"/>
        </div>
        <div className="flex flex-col gap-10 items-center mt-10 justify-between">
        {product.map((data, index) => (
            <div key={index} className="flex items-center gap-16 justify-between">
              <div>
                <Image
                  alt="product"
                  src={data.image}
                  width={90}
                  height={90}
                />
              </div>
              <div>
                <p className="text-mainColor text-xl">{data.name}</p>
              </div>
              <div>
                <p className="font-medium">{data.price}</p>
              </div>
            </div>
          ))}
                </div>
        
        </div>
      </div>
  );
};