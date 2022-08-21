import ThemeDataType from "./ThemeDataType";

export default interface ThemeContextType {
    theme:          ThemeDataType;
    toggleTheme:    (value: string) => void;
}