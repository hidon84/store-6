import * as oauthApi from '~/lib/api/oauth';
import OauthCallback from '~/components/callback/OauthCallback';

const GoogleCallbackPage = () => {
  return (
    <OauthCallback
      social="google"
      oauthCallback={oauthApi.googleCallback}
      oauthLoginCallback={oauthApi.googleLoginCallback}
    />
  );
};

export default GoogleCallbackPage;
