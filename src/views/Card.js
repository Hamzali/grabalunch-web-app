import styled from "styled-components";
import {size, pad, margin} from '../style/utils'

const Card = styled.div`
	${size}
	${pad}
	${margin}
	background: #fff;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	&:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}
`;

export default Card;
