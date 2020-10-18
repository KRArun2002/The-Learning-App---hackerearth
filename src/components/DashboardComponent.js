import React from 'react';
import './DashboardComponent.css';

import Card from './CardComponent';

function Dashboard() {
	return (
		<div>
		<h2 align="center">Upcoming Courses</h2>
		
		<div className="home">
			<div className="home__section">
				<Card
					src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
					title="Keeping organised"
					description="Upcoming course"
					time="2d:1h:3m"
				/>
				<Card
					src="https://images.unsplash.com/photo-1592499879835-3a1691ab26be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					title="Biology"
					description="Upcoming course"
					time="2d:4h:43m"
				/>
				<Card
					src="https://images.unsplash.com/photo-1523365041139-b12e329fa49b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					title="Music"
					description="Upcoming course"
					time="2d:15h:2m"
				/>
			</div>
		</div>
	</div>
	);
}

export default Dashboard;
