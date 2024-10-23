// import { useEffect, useState } from "react";
// import { ITEM_MENU_API } from "./constants";
// import { json } from "react-router-dom";

// const useRestaurantMenu = (resId) => {
//     console.log("Id is...",resId)
//     const [resInfo , setResInfo]= useState(null);

//     useEffect(() => {
//         console.log("inside hook");
//         fetchData();
//       }, []);
    
//         const fetchData = async () => {
//             console.log("menu item...",ITEM_MENU_API+resId);
//             const data = await fetch(ITEM_MENU_API + resId);
//              json = await data.json();   
//              setResInfo(json);          
//         }
//         console.log("hook info...",resInfo);
//         return resInfo;
// };

// export default useRestaurantMenu;

import { useEffect, useState } from "react";
import { ITEM_MENU_API} from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log("inside hook...")

  useEffect(() => {
    console.log("useEffect")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ITEM_MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;