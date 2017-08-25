import React from 'react';

export const listTitle = 'Upcoming Caravans'.toUpperCase();

const Dashboard = () => (
  <div className='container'>
    <div className='dashboardGradient'>
      <div className='dashboardPattern'>
        <div className='upcomingCaravans'>
          {listTitle}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
