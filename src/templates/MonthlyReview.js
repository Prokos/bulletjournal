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

const MonthlyReview = props => {
	const { year, month } = props;

	const now = moment().year(year).month(month);

	const lines = [];
	for (let i = 0;i < 28;i++) {
		lines.push(<Line />);
	}

	return (
		<Container>
			<Title>Monthly Review</Title>
			<Subtitle>{now.format('MMMM')} {year}</Subtitle>
			{lines}
		</Container>
	);
}

export default MonthlyReview;
