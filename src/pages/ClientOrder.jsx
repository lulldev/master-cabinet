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
  AccordionContent,
  Stepper,
} from 'framework7-react';

export default class Clients extends React.Component {
  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>Прием клиента</NavTitle>
        </Navbar>
        <List>
          <ListItem title="Иванов Иван Иванович">
            <Icon slot="media" f7="person"></Icon>
          </ListItem>
          <ListItem title="14:00">
            <Icon slot="media" f7="stopwatch"></Icon>
          </ListItem>
          <ListItem title="Укладка феном">
            <Icon slot="media" f7="document_text"></Icon>
          </ListItem>
        </List>
        <List accordionList>
          <ListItem accordionItem title="Услуга 1" smartSelect>
            <AccordionContent>
              <Block>
              <List>
                <ListItem header="Meeting starts in">
                  <Stepper
                    min={15}
                    max={240}
                    step={15}
                    value={0}
                    buttonsOnly={true}
                    small
                    slot="after"
                   />
                </ListItem>
                </List>
              </Block>
            </AccordionContent>
          </ListItem>
        </List>
      </Page>
    );
  }
}
