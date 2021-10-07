import React from 'react';

import styled from 'styled-components';
import device from '../../devices/device';

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media ${device.mobileL} {
    width: 400px;

    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media ${device.tablet} {
    width: 700px;

    padding-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media ${device.desktop} {
    width: 1300px;

    padding-top: 50px;
    padding-left: 25px;
    padding-right: 25px;

    background-color: grey;
  }
`;

export default ContentContainer;
