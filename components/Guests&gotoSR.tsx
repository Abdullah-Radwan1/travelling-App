"use client";
import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";

const Guests = (props: any) => {
 const [Guest, setGuest] = useState(1);
 const changeGuest = (e: any) => setGuest(e.target.value);
 const cancel = () => props.setinput("");

 return (
  <>
   <div className="bg-white p-3 flex justify-between items-center">
    <h2 className=" bg-gradient-to-r from-pink-600 to-gray-700  text-transparent bg-clip-text rounded-lg p-2">
     Number of Guests
    </h2>

    <div className="flex justify-between gap-x-1">
     <Person />
     <input
      className="w-8 text-center border-y-red-400"
      type="number"
      min={1}
      max={4}
      value={Guest}
      onChange={changeGuest}
     />
    </div>
   </div>
   <div className="buttons bg-white p-4 flex justify-evenly">
    <Button color="secondary" onClick={cancel} variant="outlined">
     Cancel
    </Button>
    <Button color="secondary" onClick={cancel} variant="outlined">
     <Link
      href={{
       pathname: "/search",
       search: `?location=${
        props.input
       }&startDate=${props.startDate.toISOString()}&endDate=${props.endDate.toISOString()}&NumberOfGuests=${Guest}`,
      }}
     >
      Search
     </Link>
    </Button>
   </div>
  </>
 );
};

export default Guests;
