import React from 'react';
import {
  Page,
  Navbar,
  Link,
  NavLeft,
  NavTitle,
  Icon,
  Block,
  List,
  ListItem,
  BlockTitle,
  Button,
} from 'framework7-react';

export default class ClientOrderReview extends React.Component {
  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>Предпросмотр счета</NavTitle>
        </Navbar>
        <BlockTitle>Клиент</BlockTitle>
        <List>
          <ListItem title="Иванов Иван Иванович">
            <Icon slot="media" f7="person"></Icon>
          </ListItem>
          <ListItem title="14:00">
            <Icon slot="media" f7="stopwatch"></Icon>
          </ListItem>
          <ListItem header="Укладка феном, еще услуга, еще услуга, Укладка феном, еще услуга, еще услуга">
            <Icon slot="media" f7="document_text"></Icon>
          </ListItem>
        </List>
        <BlockTitle>Услуги</BlockTitle>
        <Block>
          <Button className="col" fill>Подтвердить</Button>
        </Block>
      </Page>
    );
  }
}
