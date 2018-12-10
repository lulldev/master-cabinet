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
  BlockTitle,
  Button,
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
        <BlockTitle>Клиент</BlockTitle>
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
        <BlockTitle>Услуги</BlockTitle>
        <List accordionList>
          <ListItem accordionItem title="Услуга 1" smartSelect>
            <AccordionContent>
              <Block>
                <List>
                  <ListItem header="02. Стрижка женская (средние волосы)'), 750 руб.">
                    <Stepper
                      min={0}
                      max={10}
                      step={1}
                      wraps
                      value={0}
                      small
                      slot="after"
                    />
                  </ListItem>
                  <ListItem header="02. Стрижка женская (средние волосы)'), 750 руб.">
                    <Stepper
                      min={0}
                      max={10}
                      step={1}
                      wraps
                      value={0}
                      small
                      slot="after"
                    />
                  </ListItem>
                </List>
              </Block>
            </AccordionContent>
          </ListItem>
        </List>
        <BlockTitle>Дополнительно</BlockTitle>
        <List accordionList>
          <ListItem
            title="Расходники"
            smartSelect
          >
            <select name="fruits" multiple>
              <option value="apple">Apple</option>
              <option value="pineapple">Pineapple</option>
              <option value="pear">Pear</option>
            </select>
          </ListItem>
          <ListItem
            title="Комплименты"
            smartSelect
          >
            <select name="fruits" multiple>
              <option value="apple">Apple</option>
              <option value="pineapple">Pineapple</option>
              <option value="pear">Pear</option>
            </select>
          </ListItem>
          <ListItem accordionItem title="Рекомендуемые товары" smartSelect>
            <AccordionContent>
              <Block>
                <List>
                  <ListItem header="Товар 1, 750 руб.">
                    <Stepper
                      min={0}
                      max={10}
                      step={1}
                      wraps
                      value={0}
                      small
                      slot="after"
                    />
                  </ListItem>
                  <ListItem header="Товар 2, 750 руб.">
                    <Stepper
                      min={0}
                      max={10}
                      step={1}
                      wraps
                      value={0}
                      small
                      slot="after"
                    />
                  </ListItem>
                </List>
              </Block>
            </AccordionContent>
          </ListItem>     
        </List>
        <Block>
          <Button className="col" fill>Завершить</Button>
        </Block>
      </Page>
    );
  }
}
