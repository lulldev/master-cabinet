import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListItem,
} from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Меню" />
    <List simple-list>
      <ListItem title="Начать прием клиента" />
      <ListItem title="Моя выручка за день" />
      <ListItem title="История посещений" />
      <ListItem title="Настройка оповещений" />
      <ListItem title="Комментарии о клиентах" />
    </List>
  </Page>
);
