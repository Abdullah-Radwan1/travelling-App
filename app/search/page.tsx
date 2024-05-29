import Header from "@/components/Header";
import { format } from "date-fns";
import React from "react";
import dynamic from "next/dynamic";

const DynamicLocationResult = dynamic(
 () => import("../../components/LocationResult")
);

type searchparamstypes = {
 location: string;
 startDate: string;
 endDate: string;
 NumberOfGuests: string;
};

const SearchResult = ({
 searchParams: { location, startDate, endDate, NumberOfGuests },
}: {
 searchParams: searchparamstypes;
}) => {
 let FST;
 let FED;

 if (startDate && endDate) {
  FST = format(new Date(startDate), `dd  MMM `);
  FED = format(new Date(endDate), `dd  MMM `);
 }

 return (
  <>
   {location && <Header placeholder={`${location} | ${FST} To ${FED} | ${NumberOfGuests} Guest`}/>}

   <DynamicLocationResult location={location} />
  </>
 );
};

export default SearchResult;
