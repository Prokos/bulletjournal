import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	page-break-after: always;
	padding: 0 60px;
	border: 2px solid #222;

	@media print {
		border: 0;
	}
`;

const Container = props => {
	const { children } = props;

	return (
		<StyledContainer>
			{children}
		</StyledContainer>
	);
};

export default Container;
