import AuthorizedApp from './AuthorizedApp';

export default (options) => {
  return (Component) => {
    return (...props) => {
      return (
        <AuthorizedApp {...options}>
          <Component {...props} />
        </AuthorizedApp>
      );
    };
  };
};
