import React from 'react';

import Backlog from './templates/Backlog';
import MonthlyOverview from './templates/MonthlyOverview';
import HabitTracker from './templates/HabitTracker';
import MealTracker from './templates/MealTracker';
import BrainDump from './templates/BrainDump';
import MonthlyLog from './templates/MonthlyLog';
import DailyLog from './templates/DailyLog';
import MonthlyReview from './templates/MonthlyReview';
import WatchList from './templates/WatchList';
import ReadingList from './templates/ReadingList';
import GamesList from './templates/GamesList';

const App = () => {
	const year = 2019;
	const month = 11;

	return (
		<React.Fragment>
			{/* General one-time */}
			<Backlog />
			<WatchList />
			<ReadingList />
			<GamesList />
			{/* Monthly */}
			<MonthlyOverview year={year} month={month} />
			<HabitTracker year={year} month={month} />
			<MealTracker year={year} month={month} />
			<BrainDump year={year} month={month} />
			<MonthlyLog year={year} month={month} />
			<DailyLog year={year} month={month} />
			<MonthlyReview year={year} month={month} />
		</React.Fragment>
	);
};

export default App;
