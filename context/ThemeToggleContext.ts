import React from "react";
import ThemeContextType from "../dto/ThemeContextType";


const ThemeToggleContext = React.createContext<ThemeContextType | null>(null);

export default ThemeToggleContext;