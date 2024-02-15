import { useContext } from "react";
import { CheeseContext } from "../CheeseContext";
import { UserContext } from "../UserContext";

type Props = {
    cheese : { name: string; photo: string; isAdmin?: boolean}
}


const Item = ({cheese}:Props) => {
    const {isSelected} = useContext(CheeseContext);
    const {user} = useContext(UserContext);

    if (cheese.isAdmin === true && user?.isAdmin !== true){
        return(
            <div>you're not admin</div>
        )
    }

    return (
        <div style={{
            borderWidth: 2, 
            borderStyle: "solid",
            borderColor: isSelected ? "red" : "yellow"
        }}>
            <div>{cheese.name}</div>
            <img src={cheese.photo} alt="" style={{height:"8rem"}}/>
        </div>
    );
}

export default Item;