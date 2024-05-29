"use client";
import React from 'react'
import { LanguageRounded } from "@mui/icons-material";
import { Avatar, Button, CircularProgress } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import "../css/cssfile.css"

const LastHeader = () => {
    const { user } = useKindeBrowserClient();

  return (
    <>
    
    <div className="other  lg:block">
     {user ? (
      <div className="flex items-center justify-between gap-3">
       <p className="text-gray-400 font-light">Welcome {user?.given_name}</p>
       <div className="flex gap-3 rounded-xl bg-slate-50 items-center">
        <Avatar
         alt="user image"
         src={user.picture}
         className="text-gray-400"
        ></Avatar>
        <LanguageRounded className="text-gray-400" />
        <MenuRounded className="text-gray-400 " />
        <Button>
         <LogoutLink>logout</LogoutLink>
        </Button>
       </div>
      </div>
     ) : (
      <div className="flex justify-between items-center gap-3">
       <h3>
        Welcome to <span className="text-red-500 font-bold">Airbnb clone</span>
       </h3>
       <Button variant="outlined" color="primary">
        <LoginLink>log in </LoginLink>
       </Button>
      </div>
     )}
    </div>
    </>
  )
}

export default LastHeader