import { createContext } from "react";

type CheeseContextType = {
    cheeses:Cheese[];
    isSelected: boolean;
}
type Cheese = {
    name: string;
    photo: string;
    isAdmin?: boolean;
}

export const CheeseContext = createContext<CheeseContextType>({
    cheeses: [],
    isSelected: false,
})