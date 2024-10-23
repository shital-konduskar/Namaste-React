import { ITEM_IMAGE_URL } from "../utils/constants";

const RestaurantMenuItem = (props)=>{
    const {name , price , ratings , description , imageId} = props?.item?.card?.info;
    return(
        
        <div className="item-container">
            <div className="item-info">
                <h3>
                    {name}
                </h3>
                <h4>{price}</h4>
                <h4>Rating : {ratings.aggregatedRating.rating}</h4>
                <p>{description}</p>
            </div>
            <div className="item-image">
                <img 
                src={`${ITEM_IMAGE_URL}${imageId} ` }
                alt="Images is here"/>
            </div>     
        </div>
        
    )
}

export default RestaurantMenuItem;