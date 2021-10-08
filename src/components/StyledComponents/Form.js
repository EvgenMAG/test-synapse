import React from 'react';

import styled from 'styled-components';
import device from '../../devices/device';

const Form = styled.form`
  margin-right: auto;
  margin-left: auto;
  width: 300px;

  @media ${device.tablet} {
    width: 400px;
    padding-left: 35px;
    padding-right: 35px;
  }

  @media ${device.desktop} {
    width: 400px;
    padding-left: 45px;
    padding-right: 45px;
  }
`;
export default Form;
