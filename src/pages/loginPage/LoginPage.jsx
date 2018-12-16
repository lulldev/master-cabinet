import React from 'react';
import actions from './actions';
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

  state = {
    login: null,
    password: null,
  };

  login() {
    const { login, password } = this.state;
    if (login && password) {
      actions.login.signIn(login, password);
    }
  }

  render() {
    return (
      <Page>
        <Navbar>
          <NavTitle>Вход в кабинет</NavTitle>
        </Navbar>
        <List form>
          <ListItem>
            <Label>Логин</Label>
            <Input
              type="text"
              placeholder="Введите логин"
              onChange={(e) => this.setState({ login: e.target.value })}
            />
          </ListItem>
          <ListItem>
            <Label>Пароль</Label>
            <Input
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </ListItem>
        </List>
        <Block>
          <Button
            className="col"
            fill
            onClick={this.login.bind(this)}
          >
            Вход
          </Button>
        </Block>
      </Page>
    );
  }
}

export default connect({
  login: 'login'
})(LoginPage);
