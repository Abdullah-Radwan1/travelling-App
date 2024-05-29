// export const GetExplore = async function () {
//  try {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
//   const data = await res.json();
//   return data;
//  } catch (error) {
//   console.log(error);
//  }
// };

export const GetExplore = async function () {
  try {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/E1O3`);
   const data = await res.json();
   return data;
  } catch (error) {
   console.log(error);
  }
 };




export const GetLive = async function () {
    try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
     const LiveData = await res.json();
     return LiveData;
    } catch (error) {
     console.log(error);
    }
   };
   
   export const getSearchResult = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
      const searchResultData = await res.json();
      return searchResultData;
    } catch (error) {
      console.log(error);
    }
  };




