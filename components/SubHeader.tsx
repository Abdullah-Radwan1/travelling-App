import React from "react";
// import LanguageIcon from '@mui/icons-material/Language';
import { LanguageRounded } from "@mui/icons-material";

import { Button } from "@mui/material";
import { AccountCircleRounded } from "@mui/icons-material";
import { MenuRounded } from "@mui/icons-material";

const Other = () => {
  return (
<div className="other hidden lg:block">


<div className="flex items-center justify-between gap-3   ">
      <p className="text-gray-400 font-light">become a host</p>
      <LanguageRounded  className="text-gray-400"/>
      <Button size="small" variant="outlined" className="flex gap-3 rounded-xl bg-slate-50" color="secondary" >
        <AccountCircleRounded className="text-gray-400" />
        <MenuRounded  className="text-gray-400 " />
      </Button>
    </div>
</div>

  );
};

export default Other;
