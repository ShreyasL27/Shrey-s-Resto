// import { useState, useEffect } from "react";

// const useListOfRestaurants = () => {
//     const [listOfRestaurants, setlistOfRestaurants] = useState([]);
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
//         const data = await response.json();
//         console.log(data)
//         setlistOfRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     };

//     return listOfRestaurants, filteredRestaurants;
// };

// export default useListOfRestaurants;