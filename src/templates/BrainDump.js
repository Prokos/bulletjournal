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

const BrainDump = () => {
	const year = 2019;
	const month = 10;
	const now = moment().year(year).month(month);

	const lines = [];
	for (let i = 0;i < 28;i++) {
		lines.push(<Line />);
	}

	return (
		<Container>
			<Title>Brain Dump <SubtitleInline>{now.format('MMMM')} {year}</SubtitleInline></Title>
			{lines}
		</Container>
	);
}

export default BrainDump;
