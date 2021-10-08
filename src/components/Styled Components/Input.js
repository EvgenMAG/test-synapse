import styled from 'styled-components';
import device from '../../devices/device';

const Input = styled.input`
  height: 25px;

  @media ${device.tablet} {
    height: 30px;
  }

  @media ${device.desktop} {
    height: 35px;
  }
`;
export default Input;
