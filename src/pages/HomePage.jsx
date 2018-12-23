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
    const { onOpenLeftPanel } = this.props;
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link
              iconIos="f7:menu"
              iconMd="material:menu"
              panelOpen="left"
              onClick={onOpenLeftPanel}
            />
          </NavLeft>
          <NavTitle>Личный кабинет</NavTitle>
        </Navbar>
        <MasterProfile />
        <BlockTitle>Управление</BlockTitle>
        <List>
          <ListItem link="/clients/" title="Начать прием клиента" />
          <ListItem link="/proceeds/" title="Моя выручка за день" />
          <ListItem link="/notify-settings/" title="Настройка оповещений" />
        </List>
      </Page>
    );
  }
}
