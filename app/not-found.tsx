import Image from "next/image";
import React from "react";

const notfound = () => {
 return (
  <>
   <div className=" text-center container flex flex-col gap-5 justify-center items-center relative top-20">
    <div className=" sm:text-7xl  text-4xl font-extrabold">sorry!</div>
    <div className="sm:text-4xl text-2xl font-medium">
     looks like this page is not found
    </div>
    <div className="img relative w-[400px] h-[400px]">
     <Image alt="cry" src={"/cry.png"} fill />
    </div>
   </div>
  </>
 );
};

export default notfound;
