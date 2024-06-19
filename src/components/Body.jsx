import RestoCard, { withPromotedLabel } from "./RestoCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    // const {listOfRestaurants, filteredRestaurants} = useListOfRestaurants()
    const onlineStatus = useOnlineStatus();

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestoCard);

    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        // console.log(data)
        setlistOfRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (onlineStatus === false) return <h1>Looks like you are offline</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div>
            <div className="flex justify-between" >
                <div className="m-4">
                    <label>Restaurant Name: </label>
                    <input
                        type="text"
                        className="border border-solid border-black"
                        placeholder="Cafe"
                        data-testid = "searchInput"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className="pl-4" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredRestaurants(filteredRestaurants);
                    }}>🔍</button>
                </div>
                <div className="m-4 flex items-center">
                    {/* <button className="border border-solid border-black p-1 rounded-md" onClick={() => {
                        filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.info.avgRating > 4
                        );
                        setlistOfRestaurants(filteredList);
                    }}>Top Rated Restaurants</button> */}

                    {/* Implementation of useContext */}
                    <label className="ml-3">Username:</label>
                    <input
                        type="text"
                        className="p-1 border border-black"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>

            {/* Swiggy does not contain promoted label as of now so 'Promted' label will not be displayed */}
            <div className="flex flex-wrap justify-center mt-0 mx-64">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {restaurant.info.promoted ? (
                                <RestaurantCardPromoted resData={restaurant} />
                            ) : (
                                <RestoCard resData={restaurant} />
                            )}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;