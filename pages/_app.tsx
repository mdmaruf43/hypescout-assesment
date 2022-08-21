import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import "../styles/sass/style.scss";
import { useEffect, useState } from 'react';
import ThemeToggleContext from '../context/ThemeToggleContext';
import ThemeDataType from '../dto/ThemeDataType';


const MyApp = ({ Component, pageProps }: AppProps) => {
	const [theme, setTheme] 		= useState<ThemeDataType>({
		value: "light",
	});
	const [updateTheme, setUpdateTheme] = useState("");

	const toggleTheme = (value: string) => {
		setTheme({...theme, value});
		setThemeInStorage(value);
	}

	const setThemeInStorage = (value: string) => {
		localStorage.setItem('theme', value)
	}

	const getThemeInStorage = () => {
		localStorage.getItem('theme') // returns 'light' in this case
	}
	

  	return (
		<ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
			<div className={theme?.value}>
				<Component {...pageProps} />
			</div>
		</ThemeToggleContext.Provider>
	)
}

export default MyApp;
