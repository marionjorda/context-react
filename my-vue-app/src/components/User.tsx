import { UserContext } from "../UserContext";
import { useContext } from "react";


const User = () => {
    const {user, login} = useContext(UserContext)

    if(!user) {
        return [
            <button onClick={login}>Login</button>
        ]
    }

    return <div>{user?.name}</div>
}

export default User;