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
        <BlockTitle>Управление</BlockTitle>
        <List>
          <ListItem link="/" title="Начать прием клиента" />
          <ListItem link="/" title="Моя выручка за день" />
          <ListItem link="/" title="История посещений" />
          <ListItem link="/" title="Настройка оповещений" />
          <ListItem link="/" title="Комментарии о клиентах" />
        </List>
      </Page>
    );
  }
}
