import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Container from '../components/Container';
import Title from '../components/Title';
import SubtitleInline from '../components/SubtitleInline';

const Line = styled.div`
	width: 100%;
	padding: 1em;
	border-bottom: 1px dashed #eee;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
	grid-gap: 2em;
`;

const Quadrant = styled.div`
	${props => `
		${props.start ? `grid-column-start: ${props.start}` : '' }
		${props.end ? `grid-column-end: ${props.end + 1}` : '' }
	`}
`;

const QuadrantTitle = styled.div`
	font-weight: bold;
	font-size: 1.em;
`;

const MonthlyLog = props => {
	const { year, month } = props;

	const now = moment().year(year).month(month);

	const lines = [];
	for (let i = 0;i < 8;i++) {
		lines.push(<Line />);
	}

	const linesLong = [];
	for (let i = 0;i < 18;i++) {
		linesLong.push(<Line />);
	}

	return (
		<Container>
			<Title>Monthly Log <SubtitleInline>{now.format('MMMM')} {year}</SubtitleInline></Title>
			<Grid>
				<Quadrant>
					<QuadrantTitle>Todo</QuadrantTitle>
					{linesLong}
				</Quadrant>
				<Quadrant>
					<QuadrantTitle>Goals</QuadrantTitle>
					{lines}
				</Quadrant>
			</Grid>
		</Container>
	);
}

export default MonthlyLog;
