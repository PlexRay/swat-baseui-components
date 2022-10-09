import { useStyletron } from 'baseui';

export default ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        position: 'absolute',
        left: 'calc(50vw - 300px)',
        top: '150px',
        minWidth: '600px',
        borderRadius: '10px',
        padding: '40px',
        boxShadow: `0 10px 40px 0 ${theme.colors.modalShadow}`,
        background: theme?.colors?.backgroundPrimary,
      })}
    >
      {children}
    </div>
  );
};
