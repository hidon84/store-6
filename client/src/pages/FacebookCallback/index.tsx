import * as oauthApi from '~/lib/api/oauth';
import OauthCallback from '~/components/callback/OauthCallback';

const FacebookCallbackPage = () => {
  return (
    <OauthCallback
      oauthCallback={oauthApi.facebookCallback}
      oauthLoginCallback={oauthApi.facebookLoginCallback}
    />
  );
};

export default FacebookCallbackPage;
