import styled from 'styled-components';
import device from '../../devices/device';

const BtnFormSubmit = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;

  @media ${device.tablet} {
    width: 100px;
    font-size: 20px;
  }

  @media ${device.desktop} {
    width: 120px;
    font-size: 22px;
  }
`;
export default BtnFormSubmit;
