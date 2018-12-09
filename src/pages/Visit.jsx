import React from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
  Icon,
} from 'framework7-react';

export default class HistoryVisits extends React.Component {
  render() {
    return (
      <Page>
        <Navbar>
          <Navbar title="Посещение" backLink="Назад" />
        </Navbar>
        <BlockTitle>Просмотр счета клиента</BlockTitle>
        <List>
          <ListItem title="Иванов Иван Иванович">
            <Icon slot="media" f7="person"></Icon>
          </ListItem>
          <ListItem title="05/12/2018">
            <Icon slot="media" f7="calendar"></Icon>
          </ListItem>
          <ListItem title="10:10">
            <Icon slot="media" f7="stopwatch"></Icon>
          </ListItem>
          <ListItem title="Косметология № 18 905, Стоматология № 2 296">
            <Icon slot="media" f7="document_text"></Icon>
          </ListItem>                    
        </List>     
        <BlockTitle>Услуги</BlockTitle>
        <List>
          <ListItem title="Услуга" />
          <ListItem title="Услуга" />
        </List>    
      </Page>
    );
  }
}
