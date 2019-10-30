import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Container from '../components/Container';
import Title from '../components/Title';
import SubtitleInline from '../components/SubtitleInline';

const Row = styled.div`
	font-family: Nova Mono;
	display: flex;
	padding: 0.25em 0.5em;
	border-bottom: 1px solid #f2f2f2;
	height: 230px;

	${props => props.isWeekend && `
		background: #f2f2f2;
		border-color: #fff;
	`}
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	border-right: 2px dotted #aaa;
`;

const DayOfWeek = styled.div`
	width: 2em;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
	color: #666;
`;

const DayNum = styled.div`
	font-weight: bold;
	width: 2.5em;
`;

const Plans = styled.div`
	padding: 0 1em;
	border-right: 2px dotted #aaa;
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;

	&:before {
		content: 'PLANS';
		color: rgba(0,0,0,0.05);
		font-weight: bold;
		font-size: 2em;
	}
`;

const Log = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	width: 20%;

	&:before {
		content: 'LOG';
		color: rgba(0,0,0,0.05);
		font-weight: bold;
		font-size: 2em;
	}
`;

const daysPerPage = 4;
const DailyLog = props => {
	const { year, month } = props;

	const components = [];

	let day = 1;
	let now = moment().year(year).month(month);

	do {
		now = now.date(day);
		const rows = [];
		for (let i = day; i <= Math.min((day - 1) + daysPerPage, now.daysInMonth());i++) {
			const day = now.date(i);
			const isWeekend = (day.day() === 6) || (day.day() === 0);

			rows.push(
				<Row isWeekend={isWeekend}>
					<Left>
						<DayOfWeek>{day.format('ddd')}</DayOfWeek>
						<DayNum>{day.format('D')}</DayNum>
					</Left>
					<Plans />
					<Log />
				</Row>
			);
		}

		components.push(
			<Container>
				<Title>Daily Log <SubtitleInline>{now.format('MMMM')} {year}</SubtitleInline></Title>
				{rows}
			</Container>
		);

		day += daysPerPage;
	} while (day < now.daysInMonth());

	return (
		<React.Fragment>{components}</React.Fragment>
	);
}

export default DailyLog;
