import React from 'react';
import {
  Page,
  Navbar,
  Popup,
  NavRight,
  Link,
  List,
  ListInput,
  Block,
  Button,
} from 'framework7-react';

export default class CommentPopup extends React.Component {
  render() {
    const {
      popupOpened,
      onCommentPopupClose,
    } = this.props;
    return (
      <Popup
        className="comment-popup"
        opened={popupOpened}
        onPopupClosed={() => onCommentPopupClose()}
      >
        <Page>
          <Navbar title="Комментарий">
            <NavRight>
              <Link popupClose>Закрыть</Link>
            </NavRight>
          </Navbar>
          <List noHairlinesMd>
            <ListInput
              label="Ф.И.О клиента"
              type="text"
              placeholder="Иванова"
              clearButton
            />
            <ListInput
              label="Комментарий"
              type="textarea"
              placeholder="Текст.."
              clearButton
            />
          </List>
          <Block>
            <Button className="col" fill>Добавить</Button>
          </Block>        
        </Page>
      </Popup>
    );
  }
}
