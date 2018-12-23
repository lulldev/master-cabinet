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

export default class Proceeds extends React.Component {
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
          <NavTitle>Моя выручка</NavTitle>
        </Navbar>
        <BlockTitle>Подсчет выручки на текущее число</BlockTitle>
        <Block strong>
          <p>На данный момент пока нет данных по выручке.</p>
        </Block>
        <BlockTitle>Проданные абонементы</BlockTitle>
        <Block strong>
          <p>На данный момент пока нет данных о проданных абонементах</p>
        </Block>               
      </Page>
    );
  }
}
