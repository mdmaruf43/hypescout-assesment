import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import "../styles/sass/style.scss";
import 'react-rangeslider/lib/index.css';
import { useEffect, useState } from 'react';
import ThemeToggleContext from '../context/ThemeToggleContext';
import ThemeDataType from '../dto/ThemeDataType';


const MyApp = ({ Component, pageProps }: AppProps) => {
	const [theme, setTheme] 		= useState<ThemeDataType>({
		value: "light",
	});
	const [updateTheme, setUpdateTheme] = useState<string | null>("");

	const toggleTheme = (value: string) => {
		setTheme({...theme, value});
		localStorage.setItem('themeState', value);
	}

	useEffect(() => {
		let theme = localStorage.getItem('themeState');
		setUpdateTheme(theme);
	}, [theme?.value])

	useEffect(() => {
		updateTheme === "light" ? 
			document.body.style.background = "#fff"
			:
			updateTheme === "dark" ?
				document.body.style.background = "#000"
				: 
				document.body.style.background = "#fff"
	}, [updateTheme])
	

  	return (
		<ThemeToggleContext.Provider value={{ theme, toggleTheme, updateTheme }}>
			<Component {...pageProps} />
		</ThemeToggleContext.Provider>
	)
}

export default MyApp;
