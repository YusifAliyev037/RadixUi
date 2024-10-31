import { fillData } from "@/redux/global/globalSlice";
import {  Card,  Inset, Select, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from 'react'
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";

const products = [
    {id:1,img:"/cup.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:2,img:"/planter.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:3,img:"/plate.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:4,img:"/bowl.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:5,img:"/spoon.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:6,img:"/vase.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:7,img:"/cup.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:8,img:"/cup.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:9,img:"/cup.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:10,img:"/cup.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'},
    {id:11,img:"/cup.jpg", name:'Ceramic Cup',  price:'$237.00', disPrice:'$189.00', desc:'The best Ceramic Cup'}
]

function Cards() {

    const dispatch = useDispatch()

    const handleAddToCart = (item: any) => {
        const dataToDispatch = { id: item.id, name: item.name, price: item.price }; // or use `{...item}` if you've updated the Redux slice to accept objects
        console.log("Adding to cart:", dataToDispatch); // Log the item data being added
        dispatch(fillData(dataToDispatch));
    };
  return (
    <>
    <div  className="flex flex-wrap gap-4 justify-center " >
    {products.map((item, index) => (
        <Card key={index} size="2" mb="4" >
          <Inset clip="padding-box" side="top" pb="current" className="relative">
          <SlBasket color="black" onClick={() => handleAddToCart(item)} className=' cursor-pointer w-10 h-10 absolute object-cover top-3 right-5 bg-white rounded-full p-2' />

            <Image
              width={400}
              height={400}
              src={item.img}
              alt={item.name}
              style={{
                display: "block",
                objectFit: "cover",
                backgroundColor: "var(--gray-5)",
                border: "none",
              }}
            />
          </Inset>
          
          <Text as="p" size="7" color="teal" className="font-times">
            {item.name}
          </Text>
          <Text as="p" size="3" color="gray" className="mb-5">
            {item.desc}
          </Text>
          
          <Select.Root size="2" defaultValue="yellow">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="red">Red</Select.Item>
              <Select.Item value="yellow">Yellow</Select.Item>
              <Select.Item value="black">Black</Select.Item>
              <Select.Item value="white">White</Select.Item>
              <Select.Item value="blue">Blue</Select.Item>
              <Select.Item value="orange">Orange</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Text as="p" size="4" className="font-times mt-5">
            <span className="line-through">{item.price}</span> <Strong>{item.disPrice}</Strong>
          </Text>
        </Card>
      ))}
</div>
    </>
  )
}

export default Cards