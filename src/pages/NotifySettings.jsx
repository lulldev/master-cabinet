import React from 'react';
import {
  Page,
  Navbar,
  Link,
  NavLeft,
  NavTitle,
  Block,
  BlockTitle,
} from 'framework7-react';

export default class NotifySettings extends React.Component {
  render() {
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <NavTitle>Настройки уведомлений</NavTitle>
        </Navbar>
        <BlockTitle>Telegram-уведомления</BlockTitle>
        <Block strong>
          <p>
            Для настройки Telegram уведомлений от вновь пришедших клиентов нужно:<br/>
            <ul>
            <li>Установить программу Telegram для своего мобильного устройства</li>
            <li>Зарегистрироваться на сайте уведомлений PushAll <a href="https://pushall.ru/" target="_blank">по этой ссылке</a></li>
            <li>Кликните <a href="tg://resolve?domain=PushAllBot" target="_blank">этой ссылке</a> - должен открыться чат с PushAll ботом в Telegram.</li>
            <li>В сообщении найдите ссылку для добавления устройства и перейдите по ней! 
              Если не можете найти ссылку - отправьте боту /new - он пришле сообщение с ссылкой.</li>
            <li><a href="https://pushall.ru/?fs=1973&amp;key=12e72fe45315cd7e28e3d0d7018c41e3">
                        Подписаться в системе PushAll</a> на канал <string>Эстетик</string></li>
            <li>Должно придти сообщение с заголовком Эстетик о том, что устройство успешно связано. 
              Для проверки уведомлений воспользуйтесь
              <a href="http://test.cabinet.est5.ru/index.php/testing/test_notification" target="_blank">отправкой тестового сообщения</a></li>
            <li>После выполнения подписки на канал вы сможете получать уведомления в браузере и 
              telegram о пришедших клиентах.</li>
            </ul>         
          </p>
        </Block>
      </Page>
    );
  }
}
