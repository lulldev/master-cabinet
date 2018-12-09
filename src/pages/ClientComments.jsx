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
  NavRight,
} from 'framework7-react';

import CommentPopup from '../components/CommentPopup';

export default class HistoryVisits extends React.Component {
  state = {
    openCommentPopup: false,
  }

  openPopup() {
    this.setState({ openCommentPopup: !this.state.openCommentPopup });
  }

  onCommentPopupClose() {
    this.setState({ openCommentPopup: false });
  }

  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>Комментарии о клиентах</NavTitle>
          <Subnavbar inner={false}>
            <Searchbar
              searchContainer=".search-list"
              searchIn=".item-title"
            ></Searchbar>
          </Subnavbar>
          <NavRight>
            <Link
              iconIos="f7:add"
              iconMd="material:add"
              onClick={this.openPopup.bind(this)}
            />
          </NavRight>
        </Navbar>
        <List className="searchbar-not-found">
          <ListItem title="Комментарий не найден" />
        </List>
        <List mediaList className="search-list searchbar-found">
        <ListItem
          title="Рожкова Светлана Викторовна"
          text="Текст комментария"
        ></ListItem>
        </List>
        <CommentPopup
          popupOpened={this.state.openCommentPopup}
          onCommentPopupClose={this.onCommentPopupClose.bind(this)}
        />
      </Page>
    );
  }
}
