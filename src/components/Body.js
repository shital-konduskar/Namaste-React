import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantsLists, setRestaurantsLists] = useState([]);
  const [searchText , setSearchText]=useState("");
  const [filteredList , setFilteredList] = useState([]);


  useEffect(() => {
    fetchData();
  },[]);

  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.621055599465002&lng=73.8306423049214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantsLists(resList);
    setFilteredList(resList);
  };
  
  if(onlineStatus === false){
    return <h1>Looks like you're offline.Please check your internet connection</h1>
  }

  return restaurantsLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input 
            className="search-text" 
            type="text"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
           />
          <button className="search-btn"
            onClick={()=>{
             const searchRestaurantList = restaurantsLists.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredList(searchRestaurantList);
            }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterLists = restaurantsLists.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredList(filterLists);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* res-card */}
        {filteredList.map((restaurant) => (
         <Link 
         to={"/restaurant/" + restaurant.info.id} 
         className="res-card-link">
             <RestaurantCard resData={restaurant} key={restaurant.info.id} />
         </Link>
        ))}
        {/* <RestaurantCard resData = {restaurantsList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
