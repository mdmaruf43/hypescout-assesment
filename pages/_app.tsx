import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import "../styles/sass/style.scss";
import { useState } from 'react';
import ThemeToggleContext from '../context/ThemeToggleContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [theme, setTheme] 		= useState<string>("light");

	const toggleTheme = (value: string) => {
		setTheme((curentTheme) => (curentTheme === value ? "dark" : "light"));
	}

  	return (
		<ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
			<Component {...pageProps} />
		</ThemeToggleContext.Provider>
	)
}

export default MyApp;
