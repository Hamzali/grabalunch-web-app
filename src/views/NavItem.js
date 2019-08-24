import styled from "styled-components";

const NavItem = styled.div`
	margin-left: ${props => props.marginLeft || 0}px;
	margin-right: ${props => props.marginRight || 15}px;
	${props => props.align === 'end' && 'margin-left: auto;'}
	${props => props.align === 'start' && 'margin-right: auto;'}
`;

export default NavItem;
