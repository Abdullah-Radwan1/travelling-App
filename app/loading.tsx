import { CircularProgress } from "@mui/material";
import React from "react";
import "../css/cssfile.css";
const loading = () => {
 return (
  <div className="loading   ">
   <div className="flex flex-col gap-5 justify-center items-center">
    <div> Loading...</div>
    <CircularProgress />
   </div>
  </div>
 );
};

export default loading;
