import * as React from 'react';

import { Heading, HeadingLevel } from 'baseui/heading';
import { ParagraphMedium } from 'baseui/typography';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';

import Background from 'v2/components/Login/Background';

export default ({ authorize, isLoggingIn }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isLoginEnabled = username && password;

  const onLogin = () => {
    authorize({ username, password });
  };

  return (
    <Background>
      <HeadingLevel>
        <Heading styleLevel={5}>Welcome</Heading>
        <ParagraphMedium>Please log in to continue</ParagraphMedium>
      </HeadingLevel>
      <FormControl label={() => 'Username'}>
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='Username'
          disabled={isLoggingIn}
          clearable
        />
      </FormControl>
      <FormControl label={() => 'Password'}>
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
          disabled={isLoggingIn}
        />
      </FormControl>
      <FormControl
        label={() => 'Login'}
        overrides={{
          Label: {
            style: ({ $theme }) => ({
              color: $theme.colors.backgroundPrimary,
            }),
          },
        }}
      >
        <Button
          overrides={{
            BaseButton: { style: { width: '100%' } },
          }}
          onClick={onLogin}
          disabled={!isLoginEnabled || isLoggingIn}
        >
          Login
        </Button>
      </FormControl>
    </Background>
  );
};
