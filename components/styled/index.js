import styled from 'styled-components'

export const AppContainer = styled.div`
	min-height: 100vh;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Card = styled.a`
	margin: 1rem;
	flex-basis: 45%;
	padding: 1.5rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	transition: color 0.15s ease, border-color 0.15s ease;

	:hover,
	:focus,
	:active {
		color: #0070f3;
		border-color: #0070f3;
	}

	h3 {
		margin: 0 0 1rem;
		font-size: 1.5rem;
	}

	p {
		margin: 0;
		font-size: 1.25rem;
		line-height: 1.5;
	}
`
