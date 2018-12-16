import React from 'react';
import actions from './actions'
import { connect } from 'redaction';
import {
  Page,
  Navbar,
  NavTitle,
  List,
  ListItem,
  Label,
  Input,
  Block,
  Button,
} from 'framework7-react';

class LoginPage extends React.Component {
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
          <Button
            className="col"
            fill
            onClick={() => actions.login.login('test', 'test')}
          >Вход</Button>
        </Block>
      </Page>
    );
  }
}

export default connect({
  login: 'login'
})(LoginPage)
