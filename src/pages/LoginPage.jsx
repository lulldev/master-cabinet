import React from 'react';
import {
    Page,
    Navbar,
    NavTitle,
    List,
    ListItem,
    Label,
    Input,
    Row,
    Block,
    Button,
} from 'framework7-react';

export default class LoginPage extends React.Component {
  render() {
    return (
      <Page>
        <Navbar>
          <NavTitle>Вход в кабинет</NavTitle>
        </Navbar>
        <List form>
          <ListItem>
            <Label>Логин</Label>
            <Input type="text" placeholder="Введите логин" />
          </ListItem>
          <ListItem>
            <Label>Пароль</Label>
            <Input type="password" placeholder="Введите пароль" />
          </ListItem>
        </List>
        <Block>
          <Button className="col" fill>Вход</Button>
        </Block>
      </Page>
    );
  }
}
