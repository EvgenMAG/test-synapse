import React from 'react';

import FilmList from '../components/FilmList';
import ContentContainer from '../components/Containers/ContentContainer';
import BtnTop from '../components/Buttons/BtnTopUp/BtnTop';

export default function Contacts() {
  return (
    <ContentContainer>
      <FilmList />
      <BtnTop />
    </ContentContainer>
  );
}
