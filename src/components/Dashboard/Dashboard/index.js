import React from 'react';

export const listTitle = 'Upcoming Caravans'.toUpperCase();

const Dashboard = () => (
  <div className='container'>
    <div className='splashscreen-gradient'>
      <div className='splashscreen-pattern'>
        {listTitle}
      </div>
    </div>
  </div>
);

export default Dashboard;
