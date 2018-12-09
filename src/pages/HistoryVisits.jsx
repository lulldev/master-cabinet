import React from 'react';
import {
    Page,
    Navbar,
    List,
    ListItem,
    Subnavbar,
    Searchbar,
    Link,
    NavLeft,
    NavTitle,
} from 'framework7-react';

export default class HistoryVisits extends React.Component {
  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>Личный кабинет</NavTitle>
          <Subnavbar inner={false}>
            <Searchbar
              searchContainer=".search-list"
              searchIn=".item-title"
            ></Searchbar>
          </Subnavbar>
        </Navbar>
        <List className="searchbar-not-found">
          <ListItem title="Nothing found" />
        </List>
        <List mediaList className="search-list searchbar-found">
        <ListItem
          link="#"
          title="Рожкова Светлана Викторовна"
          subtitle="Мастер: Поляк Мария"
          text="05/12/2018, 13:45"
        ></ListItem>
        </List>
      </Page>
    );
  }
}
