import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Container from '../components/Container';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

const Line = styled.div`
	width: 100%;
	padding: 1em;
	border-bottom: 1px dashed #eee;
`;

const BrainDump = props => {
	const { month, year } = props;
	const now = moment().year(year).month(month);

	const lines = [];
	for (let i = 0;i < 28;i++) {
		lines.push(<Line />);
	}

	return (
		<Container>
			<Title>Brain Dump</Title>
			<Subtitle>{now.format('MMMM')} {year}</Subtitle>
			{lines}
		</Container>
	);
}

export default BrainDump;
