import AuthorizedApp from 'v2/components/Auth/AuthorizedApp';

import Login from './Login';

const config = {
  url: global.GEODISC_API_URL,
  version: 'sgerp/v2',
};

const AuthorizedLogin = (props) => {
  return (
    <AuthorizedApp config={config}>
      <Login {...props} />
    </AuthorizedApp>
  );
};

export default AuthorizedLogin;
