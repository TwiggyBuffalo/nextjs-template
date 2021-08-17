import React from 'react'
import Head from 'next/head.js'
import { AppContainer, Card } from 'components/styled'

const Home = () => (
	<AppContainer>
		<Head>
			<title>Create Next App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main>
			<h1 className="title">
				Welcome to <a href="https://nextjs.org">Next.js!</a>
			</h1>

			<p className="description">
				Get started by editing <code>pages/index.js</code>
			</p>

			<div className="grid">
				<Card href="https://nextjs.org/docs">
					<h3>Documentation &rarr;</h3>
					<p>Find in-depth information about Next.js features and API.</p>
				</Card>

				<Card href="https://nextjs.org/learn">
					<h3>Learn &rarr;</h3>
					<p>Learn about Next.js in an interactive course with quizzes!</p>
				</Card>

				<Card href="https://github.com/zeit/next.js/tree/master/examples">
					<h3>Examples &rarr;</h3>
					<p>Discover and deploy boilerplate example Next.js projects.</p>
				</Card>

				<Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
					<h3>Deploy &rarr;</h3>
					<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
				</Card>
			</div>
		</main>

		<footer>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
			</a>
		</footer>

		<style jsx>{`
			main {
				padding: 5rem 0;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			footer {
				width: 100%;
				height: 100px;
				border-top: 1px solid #eaeaea;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			footer img {
				margin-left: 0.5rem;
			}

			footer a {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			a {
				color: inherit;
				text-decoration: none;
			}

			.title a {
				color: #0070f3;
				text-decoration: none;
			}

			.title a:hover,
			.title a:focus,
			.title a:active {
				text-decoration: underline;
			}

			.title {
				margin: 0;
				line-height: 1.15;
				font-size: 4rem;
			}

			.title,
			.description {
				text-align: center;
			}

			.description {
				line-height: 1.5;
				font-size: 1.5rem;
			}

			code {
				background: #fafafa;
				border-radius: 5px;
				padding: 0.75rem;
				font-size: 1.1rem;
				font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
					DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
			}

			.grid {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;

				max-width: 800px;
				margin-top: 3rem;
			}

			.logo {
				height: 1em;
			}

			@media (max-width: 600px) {
				.grid {
					width: 100%;
					flex-direction: column;
				}
			}
		`}</style>

		<style jsx global>{`
			html,
			body {
				padding: 0;
				margin: 0;
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
					Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			* {
				box-sizing: border-box;
			}
		`}</style>
	</AppContainer>
)

export default Home
