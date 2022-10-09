import { useStyletron } from 'baseui';

import Logo from './assets/BottomLogo.svg';

export default () => {
  const [css] = useStyletron();
  return (
    <img
      className={css({
        position: 'absolute',
        bottom: '50px',
        left: 'calc(50vw - 143px)',
      })}
      src={Logo.src ?? Logo}
      alt='Logo'
    ></img>
  );
};
