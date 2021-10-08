import React from 'react';

import styled from 'styled-components';
import device from '../../devices/device';

const FormContainer = styled.div`
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  margin-right: auto;
  margin-left: auto;

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.desktop} {
    width: 400px;

    padding-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;
export default FormContainer;
