import React from 'react';
import HorizontalLoopCar from '../HorizontalLoopCar';
import LandingPageCopy from '../Copy';

const LandingPage = () => (
  <div className='container'>
    <div className='splashscreenGradient'>
      <div className='splashscreenPattern'>
        <div className='splashscreenLogo'>
          Caravan
        </div>
        <HorizontalLoopCar />
      </div>
    </div>
    <div className='welcomeBackground'>
      <LandingPageCopy />
    </div>
  </div>
)

export default LandingPage;
