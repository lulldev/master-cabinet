import React from 'react';
import {
  Page,
  Navbar,
  Link,
  NavLeft,
  NavTitle,
  BlockTitle,
  Block,
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
        <Block strong>
          <p>На данный момент нет клиентов</p>
        </Block>        
      </Page>
    );
  }
}
