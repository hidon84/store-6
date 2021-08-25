import * as oauthApi from '~/lib/api/oauth';
import OauthCallback from '~/components/callback/OauthCallback';

const FacebookCallbackPage = () => {
  return (
    <OauthCallback
      social="facebook"
      oauthCallback={oauthApi.facebookCallback}
      oauthLoginCallback={oauthApi.facebookLoginCallback}
    />
  );
};

export default FacebookCallbackPage;
