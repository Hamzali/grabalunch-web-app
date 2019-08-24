import styled from "styled-components";

const Button = styled.button`
	padding: 8px;
	font-size: 16px;
	color: white;
	text-align: center;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
	background: ${({theme}) => theme.color.primary};
	border: 0;
	border-bottom: 2px solid ${({theme}) => theme.color.light};
	cursor: pointer;
	box-shadow: inset 0 -2px ${({theme}) => theme.color.light};
	border-radius: 8px;
	&:hover {
		background: ${({theme}) => theme.color.light};
	}
`;

export default Button;
