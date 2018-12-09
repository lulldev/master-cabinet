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
      <ListItem title="Начать прием клиента" view="#main-view" panelClose />
      <ListItem title="Моя выручка за день" view="#main-view" panelClose />
      <ListItem title="История посещений" view="#main-view" panelClose />
      <ListItem title="Настройка оповещений" view="#main-view" panelClose />
      <ListItem title="Комментарии о клиентах" view="#main-view" panelClose />
      <ListItem link="/login/" title="Выход" view="#main-view" panelClose />
    </List>
  </Page>
);
