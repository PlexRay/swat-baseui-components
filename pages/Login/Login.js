import { Button } from 'baseui/button';
import { FormControl } from 'baseui/form-control';

import ReactJson from 'react-json-view';

import useAuth from 'v2/components/Auth/useAuth';

const App = () => {
  const api = useAuth();

  return (
    <div>
      <Button
        overrides={{
          BaseButton: { style: { width: '100%' } },
        }}
        onClick={() => api.logout()}
        disabled={!api}
      >
        Logout
      </Button>
      <FormControl label={() => 'API'}>
        <ReactJson src={{ api }} />
      </FormControl>
    </div>
  );
};

export default App;
