import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/globals.css'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp
