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
// import MasterProfile from '../components/MasterProfile';
export default class HomePage extends React.Component {
  onLogout() {
    window.location.href = '/index.php/main/logout';
  }

  onBackToCabinet() {
    window.location.href = '/index.php/main';
  }
  render() {
    // const { onOpenLeftPanel } = this.props;
    return (
      <Page>
        <Navbar>
          <NavTitle>Личный кабинет</NavTitle>
        </Navbar>
        {/* <MasterProfile /> */}
        <BlockTitle>Управление</BlockTitle>
        <List>
          <ListItem link="/clients/" title="Начать прием клиента" />
          <ListItem link="/proceeds/" title="Моя выручка за день" />
          <ListItem link="/notify-settings/" title="Настройка оповещений" />
          <ListItem onClick={this.onBackToCabinet} title="Старая версия" />
          <ListItem onClick={this.onLogout} title="Выход" />
        </List>
      </Page>
    );
  }
}
