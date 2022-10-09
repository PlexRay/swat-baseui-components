import { useStyletron } from 'baseui';

const withStyletron = (Component) => {
  return ({ children, ...otherProps }) => {
    const [css, theme] = useStyletron();
    return (
      <Component css={css} theme={theme} {...otherProps}>
        {children}
      </Component>
    );
  };
};

export default withStyletron;
