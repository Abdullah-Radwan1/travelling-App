import React from "react";
import { getSearchResult } from "@/utils/api";
import SortingLogic from "./SortingLogic";
import { redirect } from "next/navigation";

const LocationResult = async (props: any) => {
 let SR = await getSearchResult();

 return (
  <>
   {props.location ? (
    <div className="container py-5">
     <h1 className=" text-5xl font-bold">places in {props.location}</h1>
     <h2 className="py-4 font-bold">{`+99 places in ${props.location}`}</h2>

     <div className="filterd-cards m-auto">
    


        
      <SortingLogic SR={SR} />
  
     </div>
    </div>
   ) : (
    redirect("/")
   )}
  </>
 );
};

export default LocationResult;

//promise logic
//     let sorted = new Promise((resolve) => {
//      resolve(
//       sortedResults.sort((a:any, b:any) => {
//        return a.star > b.star ? 1 : -1;
//       })
//      );
//     });
//     sorted.then((data) => {
//      setSortedResults(data);
//     });
//    } else if (rating == false) {
//     let sorted = new Promise((resolve) => {
//      resolve(
//       sortedResults.sort((a:any, b:any) => {
//        return a.star < b.star ? 1 : -1;
//       })
//      );
//     });
//     sorted.then((data) => {
//      setSortedResults(data);
//     });
