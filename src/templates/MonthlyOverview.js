import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Container from '../components/Container';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

const MonthRow = styled.div`
	font-family: Nova Mono;
	display: flex;
	padding: 0.25em 0.5em;
	border-bottom: 1px solid #f2f2f2;

	${props => props.isWeekend && `
		background: #f2f2f2;
		border-color: #fff;
	`}
`;

const DayOfWeek = styled.div`
	width: 2.5em;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
	color: #666;
`;

const DayNum = styled.div`
	font-weight: bold;
	text-align: right;
	width: 2.5em;
	padding-right: 1.5em;
	border-right: 2px dotted #aaa;
`;

function App() {
	const year = 2019;
	const month = 11;

	const now = moment().year(year).month(month);

	const monthRows = [];
	for (let i = 1; i <= now.daysInMonth();i++) {
		const day = now.date(i);
		const isWeekend = (day.day() === 6) || (day.day() === 0);

		monthRows.push(
			<MonthRow isWeekend={isWeekend}>
				<DayOfWeek>{day.format('ddd')}</DayOfWeek>
				<DayNum>{day.format('D')}</DayNum>
			</MonthRow>
		);
	}

	return (
		<Container>
			<Title>Monthly Overview</Title>
			<Subtitle>{now.format('MMMM')} {year}</Subtitle>
			{monthRows}
		</Container>
	);
}

export default App;
