import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderTwo from '../components/HeaderTwo/HeaderTwo'
import BannerMint from '../components/BannerMint/BannerMint'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Travel NFT Mint</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
            <HeaderTwo />
			<BannerMint />
		</div>
	)
}