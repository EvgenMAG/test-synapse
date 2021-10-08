import styled from 'styled-components';
import device from '../../devices/device';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  @media ${device.tablet} {
    margin-bottom: 20px;
    font-size: 16px;
  }

  @media ${device.desktop} {
    margin-bottom: 30px;
  }
`;
export default Label;
