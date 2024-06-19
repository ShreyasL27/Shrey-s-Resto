import { useState, useEffect } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStutus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStutus(false)
        })

        window.addEventListener("online", () => {
            setOnlineStutus(true)
        })

    }, [])

    // boolean value
    return onlineStatus
}

export default useOnlineStatus;