import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items)

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="border-[rgb(239,239,245)] border-b-[15px]">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="flex justify-between list-none px-6 border-b-2"
        >
          <div className="w-9/12 my-6">
            <li className="font-medium">{item?.card?.info?.name}</li>
            <li className="text-sm">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </li>
            <p className="my-3 text-sm text-gray-400">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="p-5 w-3/12">
            <div className="absolute">
              <button
                className="p-1.5 mx-7 mt-20 w-24 bg-white shadow-sm hover:shadow-lg text-green-600 font-medium border border-gray-300 rounded-md"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              {/* <div class="inline-flex mx-7">
                    <button
                        class="p-0.5 mt-20 w-12 bg-white hover:bg-slate-200 text-green-600 font-medium border-t-2 border-l-2 border-b-2 border-green-200"
                        onClick={() => handleRemoveItem(item)}
                    >
                        -
                    </button>
                    <button
                        class="p-0.5 mt-20 w-12 bg-white hover:bg-slate-200 text-green-600 font-medium border-t-2 border-r-2 border-b-2 border-green-200"

                        onClick={() => handleAddItem(item)}
                    >
                        +
                    </button>
                    </div> */}
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="NA"
              className="h-24 w-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
