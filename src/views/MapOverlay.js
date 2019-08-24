import styled, {css} from "styled-components";

const MapOverlay = styled.div`
	position: absolute;
	${
	({top, left}) => css`
		top: ${top};
		left: ${left};
	`
	}
`;

export default MapOverlay;
