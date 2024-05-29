import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import airbnb from "@/public/airbnb.png";
import Search from "./Search";
import LastHeader from "./LastHeader";



const Header = ({ placeholder }: { placeholder?: string }) => {
 return (
  // first of header
  <div>
   <div className=" flex-wrap flex-col lg:flex-row gap-y-9  flex items-center justify-evenly bg-white shadow-md m-auto p-6">
    <div className="relative">
     <Link href={"/"} className=" relative ">
      <Image src={airbnb} alt="airbnb" height={170} width={170} />
     </Link>
    </div>
    {/* middle header  */}
    <Search placeholder={placeholder} />
    {/* last of header */}
    <Suspense fallback={<div>loading</div>}>

    <LastHeader />
    </Suspense>

   </div>
  </div>
 );
};

export default Header;
