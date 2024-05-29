import React from "react";
import { GetLive } from "@/utils/api";
import { LiveData } from "@/app/types/app";
import LiveCard from "./LiveCard";
import "@/css/maintitle.css";

const Live = async () => {
 const LiveData: LiveData = await GetLive();

 return (
  <>

   <h2 className="relative main-title ">GetLive</h2>
   <div className=" flex justify-center gap-x-3 overflow-auto ">
    {LiveData.map((item) => (
     <LiveCard key={item.title} title={item.title} img={item.img} />
    ))}
   </div>
  </>
 );
};

export default Live;
