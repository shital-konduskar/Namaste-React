import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating , sla ,cuisines} = resData?.info
    return(
        <div className='restaurant-card'>
             <img 
                alt='Reastaurant logo'
                className='res-logo'
                src={CDN_URL + cloudinaryImageId}
             />
             <div>
             <h4>
                {name}
             </h4>
             <h5>{avgRating}</h5>
             <h5>{sla.slaString}</h5>
             <h5>{cuisines.join(",")}</h5>
             </div>
        </div>
    )
}

export default RestaurantCard;