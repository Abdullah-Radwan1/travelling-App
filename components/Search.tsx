"use client";
import React, { useState } from "react";
import { SearchRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Guests from "./Guests&gotoSR";


const Search = ({ placeholder }: { placeholder?: string }) => {
 const [input, setinput] = useState("");

 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());

 const selectionRangee = {
  startDate,
  endDate,
  key: "selection",
 };

 const changeinput = (e: any) => {
  setinput(e.target.value);
 };

 const HandleSelection = (ranges: RangeKeyDict) => {
  setStartDate(ranges.selection.startDate as Date);
  setEndDate(ranges.selection.endDate as Date);
 };

 return (
  <div className="flex flex-col w-full sm:w-96">
   <div className="others pb-3 text-center hidden lg:block ">
    <Button>stays</Button>
    <Button>Experiences</Button>
    <Button>Online Services</Button>
   </div>

   <div className=" relative">
    <input
     type="text"
     className="rounded-3xl p-2  border-2  border-gray-400 border-solid  w-full "
     onChange={changeinput}
     placeholder={placeholder || "search"}
    />
    <SearchRounded className="absolute right-2 top-3" color="primary" />
    {input && (
     <div className="DRP absolute z-20  left-[-20%]">
      <DateRangePicker
       ranges={[selectionRangee]}
       onChange={HandleSelection}
       rangeColors={["#FD5B61"]}
       minDate={startDate}
      />
      <Guests
       input={input}
       setinput={setinput}
       startDate={startDate}
       endDate={endDate}
      />
     </div>
    )}
   </div>
  </div>
 );
};

export default Search