import React from 'react';
import {
  Page,
  Navbar,
  Link,
  NavLeft,
  NavTitle,
  BlockTitle,
  Block,
  List,
  ListItem, 
} from 'framework7-react';
import moment from 'moment';
import Preloader from '../components/Preloader';

export default class ClientRecords extends React.Component {
  componentWillMount() {
    const { loadClientRecords } = this.props;
    loadClientRecords();
  }
  render() {
    const {
      clientRecords,
      isLoading,
      isLoadingComplete,
      onOpenLeftPanel,
    } = this.props;

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
          <NavTitle>Клиенты</NavTitle>
        </Navbar>
        <BlockTitle>Прием клиентов на {moment().format('DD.MM.YYYY')}</BlockTitle>
        {
          isLoading ? (
            <Preloader />
          ) : (
            (isLoadingComplete && clientRecords) ? (
              <List mediaList className="search-list searchbar-found">
                {
                  clientRecords.map((record) => (
                    <ListItem
                      link="/order/"
                      title={record.fullname}
                      subtitle={`${record.record_time} - ${record.service.title}`}
                      text={`${record.service.price} руб. Длительность не указана`}
                    />
                  ))
                }
              </List>
            ) : (
              <Block strong>
                <p>На данный момент нет клиентов</p>
              </Block>
            )
          )
        }
      </Page>
    );
  }
}
