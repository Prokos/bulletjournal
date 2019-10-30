import React from 'react';
import styled from 'styled-components';

import Container from '../components/Container';
import Title from '../components/Title';

const Line = styled.div`
	position: relative;
	width: 100%;
	padding: 1em;
	border-bottom: 1px dashed #eee;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 60% 20% 20%;
	grid-template-rows: auto auto;
	grid-gap: .5em;
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
	margin-bottom: 10px;
`;

const Check = styled.div`
	border: 2px solid #ccc;
	height: 1em;
	width: 1em;
	background: #fff;
	position: absolute;
	top: 8px;
	left: 0;
`;

const GamesList = () => {
	const lines = [];
	for (let i = 0;i < 28;i++) {
		lines.push(<Line />);
	}

	const linesWithCheck = [];
	for (let i = 0;i < 28;i++) {
		linesWithCheck.push(<Line><Check /></Line>);
	}

	return (
		<Container>
			<Title>Games List</Title>
			<Grid>
				<Quadrant>
					<QuadrantTitle>Description</QuadrantTitle>
					{linesWithCheck}
				</Quadrant>
				<Quadrant>
					<QuadrantTitle>Started on</QuadrantTitle>
					{lines}
				</Quadrant>
				<Quadrant>
					<QuadrantTitle>Completed on</QuadrantTitle>
					{lines}
				</Quadrant>
			</Grid>
		</Container>
	);
}

export default GamesList;
