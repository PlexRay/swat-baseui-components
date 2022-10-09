import { useStyletron } from 'baseui';

import Illustration from './assets/LeftIllustration.svg';

export default () => {
  const [css] = useStyletron();
  return (
    <img
      className={css({
        position: 'absolute',
        bottom: '0px',
        left: '0px',
      })}
      src={Illustration.src ?? Illustration}
      alt='Illustration'
    ></img>
  );
};
