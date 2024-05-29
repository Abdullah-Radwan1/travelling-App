import Header from "@/components/Header";
import { Button, Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

type searchParams = {
 title: string;
 description: string;
 img: string;
 price: string;
 total: string;
 star: number;
};

const page = ({
 searchParams: { title, description, price, total, star, img },
}: {
 searchParams: searchParams;
}) => {
 return (
  <main>
   <Header />
   <div className="container mt-10">
    <div className="checkout-container">
     <div className="title&star flex justify-between items-center">
      <div className="text-slate-700 font-semibold sm:text-4xl text-xl">{title}</div>
      <div className="star flex items-center gap-x-1 font-semibold ">
       <Rating
        size="large"
        name="text-feedback"
        value={star}
        readOnly
        precision={0.25}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
       />
       {star}
      </div>
     </div>

     <div className="h-[300px] sm:h-[400px] w-[100%] m-auto relative ">
      <Image src={img} fill alt="img" className=" rounded-md  mt-5" />
     </div>
    </div>
    <div className="desc block">
     <div className=" text-slate-500 lg:text-2xl  mt-10 flex justify-center al ">
      {description}
     </div>
    </div>

    
    <div className="title&money mt-5 flex justify-between items-center">
     <div className="font-bold text-3xl text-rose-600 ">{price} </div>
     <div className=" flex flex-col gap-4 text-2xl font-bold items-center justify-center ">
      {total}
      <Button color={"secondary"} variant="outlined">
       procees to checkout
      </Button>
     </div>
    </div>
   </div>
  </main>
 );
};


export default page;
