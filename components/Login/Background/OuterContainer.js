import styled from 'styled-components';
import withStyletron from 'v2/components/BaseUI/withStyletron';

const Container = styled.div`
  background: ${({ theme }) => theme?.colors?.backgroundPrimary};
  height: 100vh;
  padding: 40px;
`;

export default withStyletron(Container);
