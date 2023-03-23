import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined)

export default const UserProvider = ({children}) =>
{
    const [user] = useState({
        name: "John",
        email: "john@example.com",
        DOB: "01/01/2000"
    })

    return <UserContext.Provider value={{user}}></UserContext.Provider>
}

export const useUser = () => useContext(UserContext)