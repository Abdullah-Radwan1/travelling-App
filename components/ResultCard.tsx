
import { getSearchResult } from "@/app/types/app";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
import "@/css/cssfile.css";
import Link from "next/link";

const ResultCard = (props: getSearchResult) => {
 return (
  <>
   <div className="card-container pt-4 ">
    <div className="  flex  gap-x-5 items-center pt-4 border-t-2 w-full flex-wrap md:flex-nowrap ">
     {/* image */}
     <div className="  img relative  h-[200px] sm:min-w-[450px] md:min-w-[400px] min-w-[310px] m-auto overflow-hidden ">
      <Image
       objectFit="cover"
       alt="image"
       fill
       className="rounded-3xl result-image  overflow-hidden"
       src={props.img}
      />
      <Link
       className="link font-medium"
       href={{
        pathname: "/checkout",
        search: `?description=${props.description}&img=${props.img}&title=${props.title}&total=${props.total}&price=${props.price}&star=${props.star} `,
       }}
      >
       Checkout
      </Link>
     </div>
     {/* content */}
     <div className="content flex flex-col gap-6 flex-grow">
      <div className="discription pt-8 md:pt-0 ">
       <h2 className="font-semibold text-2xl">{props.title}</h2>
       <h3 className="description py-2 text-gray-400">{props.description}</h3>
      </div>
      <div className="flex justify-between  items-center ">
       <div className="flex items-center gap-x-1 font-semibold ">
        <Rating
         name="text-feedback"
         value={props.star}
         readOnly
         precision={0.25}
         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {props.star}
       </div>
       <div className="price flex flex-col text-right ">
        <div className="mb-4 font-bold text-2xl text-rose-600 ">
         {props.price}
        </div>
        <div className="mb-4 font-bold"> {props.total}</div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default ResultCard;
