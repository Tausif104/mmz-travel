import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			once: true
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
