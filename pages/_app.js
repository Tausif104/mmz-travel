import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/globals.css'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			once: true
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp
