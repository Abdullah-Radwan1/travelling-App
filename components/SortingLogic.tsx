"use client";

import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { Button } from "@mui/material";

const SortingLogic = ({ SR } :any ) => {
 const [sortedResults, setSortedResults] = useState(SR);
 const [price, setprice] = useState(false);
 const [rooms, setrooms] = useState(false);
 const [rating, setrating] = useState(false);

 //sort the prices
 useEffect(() => {
  if (price == true) {
   const sorted = sortedResults.sort((a: any, b: any) => {
    return a.price > b.price ? 1 : -1;
   });
   setSortedResults([...sorted]); // Spread operator to create a new array and trigger state update
  } else if (price == false) {
   const sorted = sortedResults.sort((a: any, b: any) => {
    return a.price < b.price ? 1 : -1;
   });
   setSortedResults([...sorted]); // Spread operator to create a new array and trigger state update
  }
 }, [price]);
 //sort the number of rooms and guests
 useEffect(() => {
  if (rooms == true) {
   const sorted = sortedResults.sort((a: any, b: any) => {
    return a.description > b.description ? 1 : -1;
   });
   setSortedResults([...sorted]); // Spread operator to create a new array and trigger state update
  } else if (rooms == false) {
   const sorted = sortedResults.sort((a: any, b: any) => {
    return a.description < b.description ? 1 : -1;
   });
   setSortedResults([...sorted]);
  }
 }, [rooms]);
 //sort by rating
 useEffect(() => {
  if (rating == false) {
   const sorted = sortedResults.sort((a: any, b: any) => {
    return a.star > b.star ? 1 : -1;
   });
   setSortedResults([...sorted]); // Spread operator to create a new array and trigger state update
  } else if (rating == true) {
   const sorted = sortedResults.sort((a: any, b: any) => {
    return a.star < b.star ? 1 : -1;
   });
   setSortedResults([...sorted]);
  }
 }, [rating]);

 return (
  <>
   {/* sorting buttons  */}
   <div className="flex gap-3  flex-wrap">
    <Button
     onClick={() => setprice(!price)}
     className="px-8  relative"
     variant="contained"
    >
     Lower / Higher price
    </Button>
    <Button
     onClick={() => setrooms(!rooms)}
     className="px-8  relative"
     variant="contained"
    >
     guests and number of rooms
    </Button>
    <Button
     onClick={() => setrating(!rating)}
     className="px-8  relative"
     variant="contained"
    >
     Rating
    </Button>
   </div>
   {/* maping through cards */}

   {sortedResults.map((result: any) => (
    <ResultCard
     key={result.star}
     title={result.title}
     img={result.img}
     price={result.price}
     total={result.total}
     long={result.total}
     star={result.star}
     lat={result.lat}
     description={result.description}
     location={result.location}
    />
   ))}
  </>
 );
};

export default SortingLogic;
