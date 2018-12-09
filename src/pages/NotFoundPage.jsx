import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="404" backLink="Назад" />
    <Block strong>
      <p>Страница не найдена</p>
    </Block>
  </Page>
);
