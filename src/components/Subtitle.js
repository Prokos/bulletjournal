import React from 'react';
import styled from 'styled-components';

export const StyledSubtitle = styled.h2`
	color: #222;
	font-size: 1.5em;
`;

const Subtitle = props => {
	const { children } = props;

	return <StyledSubtitle>{children}</StyledSubtitle>;
};

export default Subtitle;
