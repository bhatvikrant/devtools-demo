import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	const hitAPI = async url => {
		await fetch(url);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Devtools demo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to the <a href="/">Devtools demo!</a>
				</h1>

				<p className={styles.description}>
					Always open devtools while testing.
				</p>

				<div className={styles.grid}>
					<button
						className={styles.card}
						onClick={() => hitAPI("/api/success200")}
					>
						<h3>
							Success Request <span className={styles.green}>(2XX)</span> &rarr;
						</h3>
						<p>Check the network tab for the API hit with status code:</p>
						<pre className={styles.green}>200</pre>
					</button>
					<button
						className={styles.card}
						onClick={() => hitAPI("/api/failure400")}
					>
						<h3>
							Failure Request <span className={styles.red}>(4XX)</span> &rarr;
						</h3>
						<p>Check the network tab for the API hit with status code:</p>
						<pre className={styles.red}>400</pre>
					</button>
					<button
						className={styles.card}
						onClick={() => hitAPI("/api/failure500")}
					>
						<h3>
							Failure Request <span className={styles.red}>(5XX)</span> &rarr;
						</h3>
						<p>Check the network tab for the API hit with status code:</p>
						<pre className={styles.red}>500</pre>
					</button>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://www.restapitutorial.com/httpstatuscodes.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					Check HTTP status codes
				</a>
			</footer>
		</div>
	);
}
