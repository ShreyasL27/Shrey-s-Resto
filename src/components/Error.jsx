import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err)

    return (
        <div>
            <h1 className="text-5xl flex justify-center m-4">{err.status} : {err.statusText}</h1>
        </div>
    )
}

export default Error