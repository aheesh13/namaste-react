import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;

    return(
        <div className="res-card" style={styleCard}>
            <img
             className="res-logo" 
             alt ="res-logo" 
             src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h3>{avgRating} stars</h3>
            <h4>Rupees{costForTwo /100}For Two</h4>
            <h3>{deliveryTime} minutes</h3>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
export default RestaurantCard;