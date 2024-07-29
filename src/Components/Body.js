import RestaurantCard from "./RestaurantCard";
import restaurantList from "../Utils/mockData";
import { useState } from "react";
import restaurantList from "../Utils/mockData";

const Body = () => {
    //Local State Variable - Super powerful variable
const[listOfRestaurants, setListOfRestraunt] = useState(restaurantList);
    return (
<div className="body">
<div className="filter">
<button
className="filter-btn"
onClick={() => {
    const filteredList = listOfRestaurants.filter(
(res) => res.data.avgRating > 4
    );
    setListOfRestraunt(filteredList);
//     restaurantList = restaurantList.filter(
// (res) => res.data.avgRating >4
//     );
//     console.log(restaurantList);
}}
>
Top rated restaurant
</button>
</div>
<div className="restro-container">
{listOfRestaurants.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}

</div>

{/* <div className="restro-container">
{listOfRestaurants.map((restaurant) => {
        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
      })}

</div> */}

</div>
    )
}

export default Body;