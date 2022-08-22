import ThemeDataType from "./ThemeDataType";

export default interface ThemeContextType {
    theme:          ThemeDataType;
    updateTheme:    string | null;
    toggleTheme:    (value: string) => void;
}