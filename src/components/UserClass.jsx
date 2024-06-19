import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props)
        // console.log(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/ShreyasL27")
        const data = await response.json()

        this.setState({
            userInfo: data
        })

        console.log(data)
    }

    render() {
        // const {name, location} = this.props
        // from GitHub
        const {avatar_url, name, location} = this.state.userInfo

        return (
            <div className="p-3 border border-solid border-black">
                <h1 className="text-2xl">Using Class Component:</h1>
                <img className="w-48" src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Username: @ShreyasL27</h2>
            </div>
        )
    }
}

export default UserClass