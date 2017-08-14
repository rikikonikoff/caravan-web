import React from 'react';
import { compose, withHandlers } from 'recompose';
import { clientId } from '../../../utilities/environmentVariables';
import { icGooglePlus } from '../../../utilities/imageUrls'
import gapi from 'gapi-client';
import { clickGoogleLogin } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

export const startGoogle = ({ clickGoogleLogin }) => {
  gapi.load('client:auth2', () => {
    gapi.auth2.authorize({
      'client_id': clientId,
      'cookie_policy': 'none',
      // 'scope': 'profile, email',
      'response_type': 'id_token',
    }, clickGoogleLogin);
  });
};

export const onClick = ({ clickGoogleLogin }) => () => {
  startGoogle({ clickGoogleLogin });
}

const GoogleLogin = ({ onClick }) => (
  <div className='googleLogin'>
    <button className='google-button' onClick={onClick}>
      <img className='gplus' src={icGooglePlus} alt=''/>
      Log in with Google
    </button>
  </div>
)

export default compose(
  connect(null, { clickGoogleLogin }),
  withHandlers({ onClick })
)(GoogleLogin);
