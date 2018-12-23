import React from 'react';
import {
  Panel,
  Page,
  Navbar,
  List,
  ListItem,
} from 'framework7-react';

export default ({
  onClosePanelLeft,
  onGoToClientRecords,
  onGoToProceeds,
  onGoToNotifySettings,
}) => (
  <Panel left cover themeDark onPanelBackdropClick={onClosePanelLeft}>
    <Page>
      <Navbar title="Меню" />
      <List simple-list>
        <ListItem link title="На главную" onClick={onGoToClientRecords} />
        <ListItem link title="Начать прием клиента" onClick={onGoToClientRecords}/>
        <ListItem link title="Моя выручка за день" onClick={onGoToProceeds} />
        <ListItem link title="Настройка оповещений" onClick={onGoToNotifySettings} />
        <ListItem title="Выход" />
      </List>
    </Page>
  </Panel>
);
