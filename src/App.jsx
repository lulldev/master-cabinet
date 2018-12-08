import React from 'react';
import {
  App,
  Panel,
  View,
  Statusbar,
} from 'framework7-react';

import routes from './routes';

export default function (props) {

  // Framework7 parameters here
  const f7params = {
    id: 'est5.master_cabinet', // App bundle ID
    name: 'Master-cabinet', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes,
  };

  return (
    <App params={f7params}>
      {/* Statusbar */}
      <Statusbar />

      {/* Left Panel */}
      <Panel left cover themeDark>
        <View url="/panel-left/" />
      </Panel>

      {/* Right Panel */}
      <Panel right reveal themeDark>
        <View url="/panel-right/"/>
      </Panel>

      {/* Main View */}
      <View id="main-view" url="/" main className="ios-edges"/>
    </App>
  );
};
