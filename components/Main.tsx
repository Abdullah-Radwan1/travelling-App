import React from "react";
import Discover from "@/components/Discover";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Live from "@/components/Live";

const Main = async () => {

 return (
  <div>

    <Header />
    <Explore />
    <Live />
    <Discover />
<Footer/>
  </div>
 );
};

export default Main;
