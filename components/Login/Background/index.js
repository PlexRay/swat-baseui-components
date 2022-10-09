import withStyletron from 'v2/components/BaseUI/withStyletron';

import LeftIllustration from './LeftIllustration';
import RightIllustration from './RightIllustration';
import TopLogo from './TopLogo';
import BottomLogo from './BottomLogo';

import OuterContainer from './OuterContainer';
import InnerContainer from './InnerContainer';

const Background = ({ children, ...otherProps }) => {
  const { InnerContainerComponent = InnerContainer } = otherProps;

  return (
    <div>
      <OuterContainer>
        <LeftIllustration />
        <RightIllustration />
        <TopLogo />
        <BottomLogo />
        <InnerContainerComponent>{children}</InnerContainerComponent>
      </OuterContainer>
    </div>
  );
};

export default withStyletron(Background);
