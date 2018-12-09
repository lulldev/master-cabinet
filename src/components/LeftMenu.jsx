import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListItem,
} from 'framework7-react';

/*
  TODO:
  .list-block .item-link .item-inner {
    background:none;
  }
*/

export default () => (
  <Page>
    <Navbar title="Меню" />
    <List simple-list>
      <ListItem link="/" title="На главную" view="#main-view" panelClose />
      <ListItem title="Начать прием клиента" view="#main-view" panelClose />
      <ListItem title="Моя выручка за день" view="#main-view" panelClose />
      <ListItem link="/history-visits/" title="История посещений" view="#main-view" panelClose />
      <ListItem link="/notify-settings/" title="Настройка оповещений" view="#main-view" panelClose />
      <ListItem link="/client-comments/" title="Комментарии о клиентах" view="#main-view" panelClose />
      <ListItem link="/login/" title="Выход" view="#main-view" panelClose />
    </List>
  </Page>
);
