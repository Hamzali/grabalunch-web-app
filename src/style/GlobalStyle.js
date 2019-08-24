import {createGlobalStyle} from 'styled-components/macro'
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
	${reset}
	html, body, #root {
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
		background: white;
	}
`;

export default GlobalStyle
