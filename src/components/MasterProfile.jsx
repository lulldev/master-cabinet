import React from 'react';
import { AuthConsumer } from 'react-check-auth';
import {
  Card,
  CardContent,
  List,
  ListItem,
} from 'framework7-react';
import Preloader from './Preloader';

export default class MasterProfile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <AuthConsumer>
        {({userInfo, isLoading, error}) => (
          userInfo && !isLoading ? (
            <Card>
              <CardContent padding={false}>
                <List medial-list>
                  <ListItem
                    title={`${userInfo.username}`}
                  >
                    <img
                      slot="media"
                      src={`http://online.est5.ru/photo/${userInfo.masterId}`}
                      width="60"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          ) : <Preloader />
        )}
      </AuthConsumer>
    );
  }
}
