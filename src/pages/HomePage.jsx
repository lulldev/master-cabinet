import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    Link,
    BlockTitle,
    List,
    ListItem,
} from 'framework7-react';
import MasterProfile from '../components/MasterProfile';
export default class HomePage extends React.Component {
  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>Личный кабинет</NavTitle>
        </Navbar>
        <MasterProfile />
        <BlockTitle>Управление</BlockTitle>
        <List>
          <ListItem link="/clients/" title="Начать прием клиента" />
          <ListItem link="/proceeds/" title="Моя выручка за день" />
          <ListItem link="/history-visits/" title="История посещений" />
          <ListItem link="/notify-settings/" title="Настройка оповещений" />
          <ListItem link="/client-comments/" title="Комментарии о клиентах" />
        </List>
      </Page>
    );
  }
}
