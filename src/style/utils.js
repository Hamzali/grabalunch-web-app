import {css} from 'styled-components';
export const size = ({width, height}) => css`
	width: ${width}px;
	height: ${height}px;
`;

export const pad = ({padding, paddingLeft, paddingRight, paddingTop, paddingBottom}) => css`
	padding: ${padding}px;
	padding-left: ${paddingLeft}px;
	padding-right: ${paddingRight}px;
	padding-top: ${paddingTop}px;
	padding-bottom: ${paddingBottom}px;
`;

export const margin = ({margin, marginLeft, marginRight, marginTop, marginBottom}) => css`
	margin: ${margin}px;
	margin-left: ${marginLeft}px;
	margin-right: ${marginRight}px;
	margin-top: ${marginTop}px;
	margin-bottom: ${marginBottom}px;
`;
