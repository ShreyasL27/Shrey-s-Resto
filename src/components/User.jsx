import { useState } from "react"

const User = () => {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  return (
    <div className="p-3 border border-solid border-black">
      <h1 className="text-2xl mb-5">Using Functional Component:</h1>
      <div className="flex">
        <p className="mr-3">Counter: {count}</p>
        <button className="border border-solid border-black w-10" onClick={add}>Add</button>
      </div>
        {/* data in 'loggedInUser' and 'userLocation' is coming from UserContext.jsx wrapped on About.jsx in FoodApp.jsx*/}
        <h2>Name : {loggedInUser}</h2>
        <h2>Location: {userLocation}</h2>
      <h2>Contact: shreyas@gmail.com</h2>
    </div>
  )
}

export default User