import React from 'react';

import styled from 'styled-components';
import device from '../../devices/device.js';

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media ${device.mobileL} {
    padding-top: 10px;
    width: 425px;

    background-color: rgb(214, 214, 243, 0.4);
  }

  @media ${device.tablet} {
    padding-left: 10px;
    padding-right: 10px;
    width: 768px;

    background-color: rgb(152, 226, 198, 0.4);
  }

  @media ${device.desktop} {
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
    width: 1440px;

    background-color: rgb(235, 163, 241, 0.4);
  }
`;

export default MainContainer;
