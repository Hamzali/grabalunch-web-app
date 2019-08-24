import React from 'react';
import styled from 'styled-components';
import {size} from '../style/utils'
import {PersonPinCircle} from 'styled-icons/material/PersonPinCircle';
import Overlay from "pigeon-overlay";

const Container = styled.div`
	color: ${({theme}) => theme.color.primary};
	${size}
`;


export default ({width, height, ...rest}) =>
	<Overlay offset={[width / 2, height - 10]} {...rest}>
		<Container width={width} height={height}>
			<PersonPinCircle/>
		</Container>
	</Overlay>;
