import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestoCard from "./RestoCard";
import RestoCategory from "./RestoCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  // console.log(params)    // this returns key/value pair with for eg. resID : "650989"

  // Custom Hook
  const resInfo = useRestaurantMenu(restaurantId);

  const [showIndex, setShowIndex] = useState(null);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(categories);

  // We declare Shimmer before declaring constants because resInfo tries to access null data
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  // const {itemOfCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  // console.log(resInfo);

  return (
    <div className="flex flex-col mt-10 mx-[350]">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <h1 className="text-xl">⭐{avgRating}</h1>
      </div>
      <h2 className="text-lg mt-2">{costForTwoMessage}</h2>
      <hr className="my-10 border-gray-400 border-dashed" />
      {/* <ul className="mt-4">
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (item, index) => {
            return <li key={index}>{item.card.info.name}</li>;
          }
        )}
      </ul> */}

      {/*Controlled Component*/}
      {categories.map((category) => (
        <RestoCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          // showItems={index === showIndex ? true : false}
          // setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
