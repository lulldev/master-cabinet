import React from 'react';
import {
  Panel,
  Page,
  Navbar,
  List,
  ListItem,
} from 'framework7-react';

export default ({onClosePanelLeft}) => (
  <Panel left cover themeDark onPanelBackdropClick={onClosePanelLeft}>
    <Page>
      <Navbar title="Меню" />
      <List simple-list>
        <ListItem link="/" title="На главную" view="#main-view" panelClose />
        <ListItem link="/clients/" title="Начать прием клиента" view="#main-view" panelClose />
        <ListItem link="/proceeds/" title="Моя выручка за день" view="#main-view" panelClose />
        <ListItem link="/notify-settings/" title="Настройка оповещений" view="#main-view" panelClose />
        <ListItem link="/login/" title="Выход" panelClose />
      </List>
    </Page>
  </Panel>
);
