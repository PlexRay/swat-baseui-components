import BaseUI from './BaseUI';

export default (...options) => {
  return (Component) => {
    return (...props) => {
      return (
        <BaseUI {...options}>
          <Component {...props} />
        </BaseUI>
      );
    };
  };
};
