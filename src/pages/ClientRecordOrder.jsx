import React from 'react';
import {
  Page,
  Navbar,
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
    const { onGoToClientRecords } = this.props;
    return (
      <Page>
        <Navbar title="Прием клиента"/>
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
        <BlockTitle>Парикмахерские услуги</BlockTitle>
        <List accordionList>
          <ListItem accordionItem title="Услуга 1" smartSelect>
            <AccordionContent>
              <Block>
                <List>
                  <ListItem header="01. Стрижка женская (короткие волосы)'), 750 руб.">
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
            <select name="consumables" multiple>
              <option value="1">Шампунь, 20 г.</option>
              <option value="2">Крем, 1 шт.</option>
            </select>
          </ListItem>
          <ListItem
            title="Комплименты"
            smartSelect
          >
            <select name="compliments" multiple>
              <option value="1">ИК-сауна</option>
              <option value="2">Солярий</option>
            </select>
          </ListItem>
          <ListItem accordionItem title="Рекомендуемые товары" smartSelect>
            <AccordionContent>
              <Block>
                <List>
                  <ListItem header="Крем для ухода рук, 750 руб.">
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
                  <ListItem header="Краска для волос, 1 шт., 150 руб.">
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
          <Button fill big onClick={() => window.location.href = '/'}>Подтвердить</Button>
        </Block>
      </Page>
    );
  }
}
