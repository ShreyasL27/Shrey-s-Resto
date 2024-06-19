import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

    // Subscribing to the store
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearItem = () => {
        dispatch(clearItem())
    }

    return (
        <div className="flex flex-col mt-10 mx-[350]">
            <div className="flex justify-between mx-5">
                <h1 className="text-3xl">Your Cart :</h1>
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClearItem}
                >
                    Clear Cart
                </button>
            </div>
            <hr className="my-10 border-gray-400 border-dashed" />
            <div className="border-[rgb(239,239,245)] border-t-[15px]">
                {
                    cartItems.length === 0 && 
                    <div className="my-5 text-center">
                        <h1 className="text-2xl mb-10">Your cart is empty</h1>
                        <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-2 px-4 rounded">Go to Restaurants Page</Link>
                    </div>
                }
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart