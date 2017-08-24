import { icGooglePlus } from '../../../utilities/imageUrls'
import { compose } from 'recompose';
import React from 'react';
import processProps from './processProps';

const loginButtonText = 'Log in with Google'

export const GoogleLogin = ({ onClick }) => (
  <button className='googleButton' onClick={onClick}>
    <img className='gplus' src={icGooglePlus} alt=''/>
    {loginButtonText}
  </button>
);

export default compose(
  processProps,
)(GoogleLogin);
