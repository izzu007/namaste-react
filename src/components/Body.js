import RestaurantCard from "./ResturantCard"
import objs from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./shimmer"
const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState(objs)
    const [filteredRestaurant, setFilteredRestaurant] = useState(objs)
    const[searchText, setSearchText] = useState("");
    console.log(filteredRestaurant)
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //     const json = await data.json();
    //     setlistOfRestaurant([json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants])
    //     console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            
        
    // }

    if(listOfRestaurant.length == 0){
        <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter" >
                <input type="text" name="search" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
                />
                <button onClick={()=> {
                    const filteredRestaurantList = listOfRestaurant.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase())
                ) 
                setFilteredRestaurant(filteredRestaurantList)
                }}>Search</button>
                <button className="filter-btn" onClick={() =>{
                    const filteredList = listOfRestaurant.filter((res) => res.avgRating > 4);
                    setlistOfRestaurant(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restuarant => <RestaurantCard key={restuarant.id} resData={restuarant} />)
                }
            {/* <RestaurantCard resData={objs[0]} />
            <RestaurantCard resData={objs[1]} />
            <RestaurantCard resData={objs[2]} />
            <RestaurantCard resData={objs[3]} /> */}
            </div>
        </div>
    )
}
export default Body