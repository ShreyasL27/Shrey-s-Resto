import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    userLocation: "Default Location"
});

export default UserContext;