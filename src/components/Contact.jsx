import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Contact = () => {

    const {loggedInUser, setUserName} = useContext(UserContext);
    return (
        <div>
            <h1 className="text-5xl flex justify-center m-4">Contact Us Page</h1>
            {/* <UserContext.Consumer>
                {({ loggedInUser }) => <h2>Name: {loggedInUser}</h2>}
            </UserContext.Consumer> */}
            <UserContext.Provider value={loggedInUser} onChange={(e) => setUserName(e.target.value)}>
                    <form className="m-1 p-1">
                        <label>Name: </label>
                        <input type="text" placeholder={loggedInUser} className="border border-black"/>
                        <br /><br />
                        <label>Messages: </label>
                        <input type="text" placeholder="Type in a message" className="border border-black"/>
                        <br /><br />
                        <button className="border border-black p-1 rounded">
                            Submit
                        </button>
                    </form>
            </UserContext.Provider>
        </div>
    )
}

export default Contact