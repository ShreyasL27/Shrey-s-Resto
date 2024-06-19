import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restaurantId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(MENU_API + restaurantId)
        const data = await response.json();

        setResInfo(data.data)
    }
    
    return resInfo;
}

export default useRestaurantMenu;