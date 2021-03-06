import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Container from '../components/Container';
import Title from '../components/Title';
import SubtitleInline from '../components/SubtitleInline';

const MonthRow = styled.div`
	font-family: Nova Mono;
	display: flex;
	padding: 0.25em 0.5em;
	border-bottom: 1px solid #f2f2f2;
	font-size: 0.85em;

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
	border-right: 2px dotted transparent;
`;

const MealCols = styled.div`
	display: flex;
	margin-left: 4.55em;
	margin-bottom: 5px;
`;

const MealCol = styled.div`
	border-right: 2px solid #ddd;
	padding: 0.2em 0.5em;
	writing-mode: tb-rl;
    transform: rotate(-180deg);
	text-transform: uppercase;
	font-family: Nova Mono;
	font-weight: bold;

	&:first-of-type {
		border-right: 0;
		padding-right: 0.65em;
	}

	${props => props.horizontal && `
		transform: none;
		writing-mode: horizontal-tb;

		border-right: none;
		display: flex;
		align-items: flex-end;
		padding-left: 1em;
	`}
`;

const Habit = styled.div`
	padding: 0.2em 0.5em;
	margin: 0 .72em;
	border: 2px solid #ccc;
	height: 1.5em;
	width: 1.5em;
	background: #fff;
`;

const MealTracker = props => {
	const { year, month } = props;

	const now = moment().year(year).month(month);

	const meals = [
		'restjes',
		'gekookt',
		'besteld',
		'uit eten',
	];

	const monthRows = [];
	for (let i = 1; i <= now.daysInMonth();i++) {
		const day = now.date(i);
		const isWeekend = (day.day() === 6) || (day.day() === 0);

		monthRows.push(
			<MonthRow isWeekend={isWeekend}>
				<DayOfWeek>{day.format('ddd')}</DayOfWeek>
				<DayNum>{day.format('D')}</DayNum>
				{meals.map(() => <Habit />)}
			</MonthRow>
		);
	}

	return (
		<Container>
			<Title>Meal Tracker <SubtitleInline>{now.format('MMMM')} {year}</SubtitleInline></Title>
			<MealCols>
				{meals.map(habit => (
					<MealCol>{habit}</MealCol>
				))}
				<MealCol horizontal>Description</MealCol>
			</MealCols>
			{monthRows}
		</Container>
	);
}

export default MealTracker;
