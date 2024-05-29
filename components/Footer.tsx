import Link from "next/link";
import React from "react";

const FooterItems = [
 {
  title: "About",
  links: ["first", "second", "third", "fourth"],
 },
 {
  title: "support",
  links: ["first", "second", "third", "fourth"],
 },
 {
  title: "community",
  links: ["first", "second", "third", "fourth"],
 },
 {
  title: "Host",
  links: ["first", "second", "third", "fourth"],
 },
];

const Footer = () => {
 return (
  <div className=" gap-y-10 gap-x-10 px-16 py-6 items-center mt-32 bg-slate-100 grid grid-cols-2 md:grid-cols-4 m-auto">
   {FooterItems.map((item) => (
    <div className="text-center" key={item.title}>
     <h3 className="text-2xl font-bold">{item.title}</h3>
     {item.links.map((link) => (
      <Link
       className="footer-e  text-gray-500 py-4 text-xl block"
       href={item.title}
      >
       {link}
      </Link>
     ))}
    </div>
   ))}
  </div>
 );
};

export default Footer;
