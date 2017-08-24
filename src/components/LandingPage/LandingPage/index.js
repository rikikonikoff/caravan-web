import React from 'react';
import HorizontalLoopCar from '../HorizontalLoopCar';
import LandingPageCopy from '../Copy';

const LandingPage = () => (
  <div className='container'>
    <div className='splashscreen-gradient'>
      <div className='splashscreen-pattern'>
        <div className='splashscreen-logo'>
          Caravan
        </div>
        <HorizontalLoopCar />
      </div>
    </div>
    <div className='welcome-background'>
      <LandingPageCopy />
    </div>
  </div>
)

export default LandingPage;
