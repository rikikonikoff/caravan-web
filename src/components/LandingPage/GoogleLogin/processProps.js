import { clickGoogleLogin } from '../../../actions/actionCreators';
import { clientId } from '../../../utilities/environmentVariables';
import { compose, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import gapi from 'gapi-client';


export const onClick = ({
  clickGoogleLogin,
  extractData,
}) => () => {
  startGoogle({ clickGoogleLogin, extractData });
}

function startGoogle({ clickGoogleLogin, extractData }){
  gapi.load('client:auth2', () => {
    gapi.auth2.init({
      'client_id': clientId,
      'scope': 'email profile',
      'response_type': 'id_token',
    }).then(GoogleAuth => {
      const user = GoogleAuth.currentUser.get();
      const token = user.getAuthResponse().id_token;
      const profile = user.getBasicProfile();
      const name = profile.getName();
      const image = profile.getImageUrl();

      clickGoogleLogin({ token, name, image });
    });
  });
}

export default compose(
  withProps({ startGoogle }),
  connect(null, { clickGoogleLogin }),
  withHandlers({ onClick }),
);
