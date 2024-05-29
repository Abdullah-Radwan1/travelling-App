"use client";
import { Liveitem } from "@/app/types/app";
import Image from "next/image";
import React from "react";
import "../css/cssfile.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const LiveCard = ({ img, title }: Liveitem) => {
 const ref = useRef<HTMLDivElement>(null);

 const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0 1", "1.33 1"],
 });
 const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
 const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
 return (
  <>
   <motion.div
    ref={ref}
    className="flex flex-col gap-8   "
    style={{ scale: scaleProgress, opacity: opacityProgress }}
   >
    <div className=" relative h-96 w-96 flex ">
     <Image alt="image" src={img} fill className="rounded-md livecard"></Image>
    </div>
    <h3 className="  text-center text-2xl font-semibold text-slate-700   ">
     {title}
    </h3>
   </motion.div>
  </>
 );
};

export default LiveCard;
