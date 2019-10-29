import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span`
	color: #888;
	font-size: inherit;
`;

const SubtitleInline = props => {
	const { children } = props;

	return <StyledTitle>{children}</StyledTitle>;
};

export default SubtitleInline;
