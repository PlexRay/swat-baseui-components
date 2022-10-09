import { useStyletron } from 'baseui';

import Illustration from './assets/RightIllustration.svg';

export default () => {
  const [css] = useStyletron();
  return (
    <img
      className={css({
        position: 'absolute',
        bottom: '0px',
        right: '0px',
      })}
      src={Illustration.src ?? Illustration}
      alt='Illustration'
    ></img>
  );
};
