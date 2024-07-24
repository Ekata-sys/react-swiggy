import React from "react";
import ReactDOM from "react-dom/client";

// header 
//   - Logo
//   -Navitems
// Body 
//    -ResturantContainer
//    -ResturantCard
//     - img, restroname, rating, cusine, diliverytime
// Footer
//  - copyright
//  - Links
//  - Address
//  - Contact

const Header = () =>{
    return(
        <div className="header">
        <div className="logo-container">
<img className="logo"
 src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" />
        </div>

        <div className="nav-items">
<ul>
    <li>Home</li>
    <li>AboutUs</li>
    <li>ContactUs</li>
    <li>Cart</li>
</ul>
        </div>
        </div>
    )
}


const RestaurantCard = (props) =>{
    const { resName, cusine } = props;
    // console.log(props);
return(
    <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" alt="res-logo" 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f996b31033fd07603bfb28cb4e526683"/>
<h3>{props.resName}</h3>
<h4>{props.cusine}</h4>
<h4>4.4 Star</h4>
<h5>38 Minutes</h5>
    </div>
)
}

const Body = () => {
    return (
<div className="body">
<div className="searchbox">Search</div>
<div className="restro-container">
<RestaurantCard 
resName = "Chinese Wok" 
cusine="Chinese, Asian, Tibetan, Desserts
Civil Lines" />
<RestaurantCard resName = "Domino's Pizza"
cusine = "Pizzas, Italian, Pastas, Desserts Daryaganj" />
</div>
</div>
    )
}


const AppLayout = () =>{
    return (
<div className="app">
<Header/>
<Body />
</div>
    );
    
};

 

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<AppLayout/>);


