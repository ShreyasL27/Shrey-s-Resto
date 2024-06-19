import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount(){
    }
    
    render(){
        return (
            <div>
                <h1 className="text-5xl flex justify-center m-4">About Our Food App</h1>
                <hr className="border border-black w-1/2 mx-96"/>
                <p className="py-5 text-3xl flex justify-center text-orange-500">Hope you find the Dish Delicious!</p>
                <User />
                <UserClass name = {"Shreyas Linge"} location = {"Pune City"}/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Our Food App</h1>
//             <p>Hope you find the Dish Delicious!</p>
//             {/* <User /> */}
//             <UserClass name = {"Shreyas Linge"} location = {"Pune City"}/>
//         </div>
//     )
// }

export default About