import React from 'react';
import {
  Page,
  Navbar,
  Link,
  NavLeft,
  NavTitle,
  BlockTitle,
  // Block,
  List,
  ListItem,
} from 'framework7-react';

export default class Clients extends React.Component {
  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>Клиенты</NavTitle>
        </Navbar>
        <BlockTitle>Прием клиентов на 09.12.2018</BlockTitle>
        <List mediaList className="search-list searchbar-found">
          <ListItem
            link="/order/"
            title="Рожкова Светлана Викторовна"
            subtitle="16:00 - 01. Укладка феном (короткие волосы)"
            text="750 руб. Длительность не указана"
          />
          <ListItem
            link="/order/"
            title="Рожкова Светлана Викторовна"
            subtitle="16:00 - 01. Укладка феном (короткие волосы)"
            text="750 руб. Длительность не указана"
          />          
        </List>
        {/* <Block strong>
          <p>На данный момент нет клиентов</p>
        </Block>         */}
      </Page>
    );
  }
}
