import React from 'react';
import styled from 'styled-components';

import { StyledSubtitle } from './Subtitle';

const StyledTitle = styled.h1`
	color: #444;
	font-size: 1.2em;
	margin-top: 2em;
	margin-bottom: 1em;

	& + ${StyledSubtitle} {
		margin-top: -1em;
	}
`;

const Title = props => {
	const { children } = props;

	return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
