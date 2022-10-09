import { useStyletron } from 'baseui';

import Logo from './assets/TopLogo.svg';

export default () => {
  const [css] = useStyletron();
  return (
    <img
      className={css({
        position: 'absolute',
        top: '50px',
        left: 'calc(50vw - 74px)',
      })}
      src={Logo.src ?? Logo}
      alt='Logo'
    ></img>
  );
};
