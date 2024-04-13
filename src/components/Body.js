import RestaurantCard from "./RestaurantCard";
import mockResObject from "../utils/mockData"; // Renamed import variable

import { useState } from "react"; 

const Body = () => {
    // State for resObject
    const [resObject, setResObject] = useState(mockResObject); // Use mockResObject for initial state

    // handleClick function inside the Body component
    const handleClick = () => {
        // Filter resObject based on avgRating > 4
        const filteredList = resObject.filter((res) => res.info.avgRating > 4);
        setResObject(filteredList);
    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={handleClick}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {resObject.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
