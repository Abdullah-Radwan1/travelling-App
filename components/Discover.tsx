import Image from "next/image";
import React from "react";
import m from "/public/m.jpg";
const Discover = () => {
    
 return (
  <div className="relative mt-20 container m-auto h-96  content-end  ">
   <div className="image">
    <Image
     alt="image"
     src={m}
     fill
     className="object-cover rounded-2xl image"
    />
   </div>
   <div className=" flex flex-col justify-end   items-center  ">
    <h1 className="hover:font-semibold  duration-200 sm:text-4xl  md:text-2xl   lg:text-4xl max-lg:text-4xl xl:text-7xl bg-gradient-to-r from-white to-yellow-100 text-transparent bg-clip-text">
     Discover Our Places
    </h1>

    <h1 className="bg-gradient-to-l from-yellow-300 hover:font-semibold  duration-500 to-slate-300 text-transparent bg-clip-text font-extrabold  sm:text-3xl  md:text-1xl   lg:text-3xl max-lg:text-3xl xl:text-6xl  ">
     Get inspired
    </h1>
   </div>
  </div>
 );
};

export default Discover;
