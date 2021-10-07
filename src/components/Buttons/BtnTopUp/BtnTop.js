import React, { useState } from 'react';

import styled from 'styled-components';

import avatar from '../../UserMenu/default-avatar.png';

const Btn = styled.button`
  display: ${props => props.display};
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  font-size: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  background-color: transparent;
  &:hover {
    transform: scale(1.4);
  }
`;

export default function BtnTop() {
  const [btnVisibility, setBtnVisibility] = useState('none');

  window.onscroll = function () {
    handleScroll();
  };

  const handleScroll = () => {
    let bodyScrollTop = document.body.scrollTop;
    let elementScrollTop = document.documentElement.scrollTop;
    if (bodyScrollTop > 500 || elementScrollTop > 500) {
      setBtnVisibility('block');
    } else {
      setBtnVisibility('none');
    }
  };

  const onBtnClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Btn display={btnVisibility} onClick={onBtnClick}>
      <img src={avatar} alt="" width="60" />
    </Btn>
  );
}
