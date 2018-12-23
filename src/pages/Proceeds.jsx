import React from 'react';
import _ from 'lodash';
import {
  Page,
  Navbar,
  Link,
  NavLeft,
  NavTitle,
  BlockTitle,
  Block,
} from 'framework7-react';
import Preloader from '../components/Preloader';

export default class Proceeds extends React.Component {
  
  componentWillMount() {
    const { loadProceeds } = this.props;
    loadProceeds('2018-12-23');
  }

  render() {
    const {
      onOpenLeftPanel,
      proceeds,
      subscription,
      isLoading,
      isLoadingComplete,
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
          <NavTitle>Моя выручка</NavTitle>
        </Navbar>
        <BlockTitle>Подсчет выручки на текущее число</BlockTitle>
        {
          isLoading ? (
            <Preloader />
          ) : (
            (isLoadingComplete && proceeds) ? (
              <div className="data-table card">
                <table>
                  <thead>
                    <tr>
                      <th className="label-cell">Специализация</th>
                      <th className="numeric-cell">Прайс-сайт</th>
                      <th className="numeric-cell">Прайс-телефон</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Object.entries(proceeds).map((proceed, i) => {
                        if (proceed[0] !== 'proceed_total_amount') {
                          return (
                            <tr key={String(i)}>
                              <td className="label-cell">{proceed[0]}</td>
                              <td className="numeric-cell">
                                {(_.has(proceed[1], 'Прайс сайт')) && proceed[1]['Прайс сайт'] }
                              </td>
                              <td className="numeric-cell">
                                {(_.has(proceed[1], 'Прайс телефон')) && proceed[1]['Прайс телефон'] }
                              </td>
                            </tr>
                          )
                        }
                      })
                    }
                  </tbody>
                </table>
                <div className="data-table-footer">
                    <table>
                      <tfoot>
                        <tr>
                          <th className="label-cell" colSpan="2">Итого:</th>
                          <th className="numeric-cell">{proceeds.proceed_total_amount}</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
              </div>
            ) : (
              <Block strong>
                <p>На данный момент пока нет данных по выручке.</p>
              </Block>                  
            )
          )
        }
        <BlockTitle>Проданные абонементы</BlockTitle>
        {
          isLoading ? (
            <Preloader />
          ) : (
            (isLoadingComplete && subscription) ? (
              <div className="data-table card">
                <table>
                  <thead>
                    <tr>
                      <th className="label-cell">Абонемент</th>
                      <th className="numeric-cell">Кол-во</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      subscription.map((subscription, i) => {
                        return (
                          <tr key={String(i)}>
                            <td className="label-cell">{subscription.subscription}</td>
                            <td className="numeric-cell">
                              {subscription.count}
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            ) : (
              <Block strong>
                <p>На данный момент пока нет данных о проданных абонементах</p>
              </Block>
            )
          )
        }
      </Page>
    );
  }
}
