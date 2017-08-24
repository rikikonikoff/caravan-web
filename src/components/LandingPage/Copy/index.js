import React from 'react';
import GoogleLogin from '../GoogleLogin';

const LandingPageCopy = () => (
  <div>
    <div className='welcome'>
      Welcome to Caravan
      <div className='welcome-description'>
        Taking a road trip? Organize how
        travelers will get to their destination.
      </div>
    </div>
    <GoogleLogin />
  </div>
)

export default LandingPageCopy;
