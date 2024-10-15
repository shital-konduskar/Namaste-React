import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurantsLists , setRestaurantsLists] = useState(restaurantsList);
  return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={() => 
             {
                const filterLists = restaurantsLists.filter((restaurant)=>
                restaurant.info.avgRating > 4.0
            )
            setRestaurantsLists(filterLists);
        }
        }>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* res-card */}
        {restaurantsLists.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
        {/* <RestaurantCard resData = {restaurantsList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
