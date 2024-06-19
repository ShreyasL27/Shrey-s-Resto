import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const [btnName, setbtnName] = useState("Login");
  // console.log("header rendered");

  const onlineStatus = useOnlineStatus();

  // Subscribing to the store by using Selector
  const cartItems = useSelector((store) => store.cart.items)
  // console.log(cartItems);

  // When there is no dependency array, useEffect is called everytime the component renders
  // When there is an empty dependency, useEffect is called only once on initial render
  // Whenever the dependency is updated, useEffect is called
  useEffect(() => {
    // console.log("useEffect Called")
  }, [])

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg">
      <div>
        <img
          className="w-40"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 text-orange-600 hover:text-orange-700 font-semibold"><Link to="/">Home</Link></li>
          <li className="px-4 text-orange-600 hover:text-orange-700 font-semibold"><Link to="/about">About Us</Link></li>
          <li className="px-4 text-orange-600 hover:text-orange-700 font-semibold"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 text-orange-600 hover:text-orange-700 font-semibold"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-semibold"><Link to="/cart"><span className="text-xl">🛒</span>{cartItems.length}</Link></li>
          <button
            className="font-semibold border border-solid border-black px-3 mx-4 w-20 h-auto bg-orange-200"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="text-orange-600 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;