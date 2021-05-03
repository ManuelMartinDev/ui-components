import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
	* {
		margin:0;
		padding:0;
		box-sizing:border-box;
		font-family:-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
	}
`;

export default globalStyles;
