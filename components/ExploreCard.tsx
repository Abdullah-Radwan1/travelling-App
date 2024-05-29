import React from "react";
import { ExploreItem } from "@/app/types/app";
import Image from "next/image";

import "../css/cssfile.css";

const ExploreCard = ({ url, description }: ExploreItem) => {
 return (
  <div className="explore flex flex-col justify-center items-center gap-y-4  transition">
   <div className="exploreimg">
    <Image
     src={url}
     height={340}
     width={340}
     alt="image"
     className="rounded-md  "
    />
   </div>
   <div className="flex flex-col gap-2 text-center ">
    <div className="font-bold text-2xl bg-gradient-to-r from-slate-700 to-pink-600  text-transparent bg-clip-text">
     {description}
    </div>
   </div>
  </div>
 );
};

export default ExploreCard;
