import * as React from 'react';

import base64 from 'base-64';

import LoginPage from './LoginPage';

import AuthContext from './AuthContext';

const AuthorizedApp = (props) => {
  const {
    config,
    children,
    onAuthorized = () => {},
    onAuthorizationFailed = () => {},
  } = props;

  const { url } = config;

  const loginKey = `login:${url}`;
  const tokenKey = `token:${url}`;

  const [isLoaded, setIsLoaded] = React.useState(false);

  const [api, setApi] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const updateApi = (value) => {
    setApi(value);
    setError(null);
    setIsLoggingIn(false);
  };

  const updateError = (value) => {
    setApi(null);
    setError(value);
    setIsLoggingIn(false);
  };

  const authorize = async ({ username, password, token }) => {
    // console.log('*** authorize', { username, password, token });

    setIsLoggingIn(true);

    const basicAuthToken = token ?? base64.encode(`${username}:${password}`);

    const getHeaders = () => ({
      Authorization: `Basic ${basicAuthToken}`,
    });

    const fetch = async (url, opts = {}, ...otherArgs) => {
      const headers = {
        ...(opts?.headers ?? {}),
        ...getHeaders(),
      };
      const newOpts = {
        ...(opts ?? {}),
        headers: {
          ...(opts?.headers ?? {}),
          ...headers,
        },
      };
      return global.fetch(url, newOpts, ...otherArgs);
    };

    const logout = () => {
      updateApi(null);
    };

    try {
      const usersResponse = await fetch(
        `${url}/api/v2/user?username=${encodeURIComponent(username)}`
      );

      if (usersResponse.status !== 200) {
        throw new Error(usersResponse.statusText);
      }

      const users = await usersResponse.json();
      const user = users?.objects?.[0];

      const newApi = {
        config,
        user,
        fetch,
        logout,
        $compat: {
          getHeaders,
          basicAuthToken,
        },
      };

      global.localStorage.setItem(loginKey, username);
      global.localStorage.setItem(tokenKey, basicAuthToken);

      updateApi(newApi);

      onAuthorized(newApi);
    } catch (e) {
      [loginKey, tokenKey].map(key => global.localStorage.removeItem(key));

      updateError(e);
      onAuthorizationFailed(e);
    }
  };

  React.useEffect(() => {
    const login = global.localStorage.getItem(loginKey);
    const token = global.localStorage.getItem(tokenKey);

    (async () => {
      try {
        if (!isLoaded && login && token) {
          await authorize({ username: login, token });
        }
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  if (api) {
    return <AuthContext.Provider value={api}>{children}</AuthContext.Provider>;
  }

  if (isLoaded) {
    return (
      <LoginPage
        error={error}
        authorize={authorize}
        isLoggingIn={isLoggingIn}
      />
    );
  }

  return null;
};

export default AuthorizedApp;
