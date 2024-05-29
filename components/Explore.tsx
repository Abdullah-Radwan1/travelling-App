import React from "react";
import ExploreCard from "./ExploreCard";
import { ExploretData } from "@/app/types/app";
import { GetExplore } from "@/utils/api";
import "@/css/maintitle.css";

const Explore = async () => {
 const exploredata: ExploretData = await GetExplore();

 return (
  <>
   <h2 className="main-title">Explore</h2>
   <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-9">
    {exploredata.map((item) => (
     <ExploreCard
      key={item.url}
      url={item.url}
      description={item.description}
     />
    ))}
   </div>
  </>
 );
};

export default Explore;
