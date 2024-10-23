import { useEffect, useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { ITEM_MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{
        const {resId} = useParams();
        // const [resInfo , setResInfo] = useState(null);

    const resInfo = useRestaurantMenu(resId);
    // useEffect(()=>{
    //     fetchData();
    // }, [])

    console.log("info is here",resInfo)
    
    // const fetchData = async ()=>{
    //    const restaurantMenu =  await fetch(ITEM_MENU_API + resId)
    //    const json = await restaurantMenu.json();
    //     setResInfo(json);
    // }

    if(resInfo === null ){
        return <Shimmer />
    }

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {name , avgRating , costForTwoMessage , cuisines, sla} = resInfo?.data?.cards[2]?.card?.card?.info;
    console.log("menu title",name , avgRating , costForTwoMessage);

    return(
        <div className="menu">
            <h1>
                {name}
            </h1>
            <div className="menu-info">
                    <h3>Rating - {avgRating} {costForTwoMessage} </h3> 
                    <h4 className="menu-info-cuisine"> {cuisines.join(",")} </h4>
                    <h6> {sla.slaString} </h6>
            </div>
            <hr/>
            <div className="recommended-menu">
                <h2>Recommended Menu ({itemCards.length}) </h2>
            <ul>
              {
                itemCards.map((item,index)=>
                    <div key={index} >
                        <RestaurantMenuItem item={item} />
                        <hr />
                    </div>
                    // <h3>{item.card.info.name}</h3>
                )
              }
            </ul>
            </div>
            
        </div>
    )  
}

export default RestaurantMenu;