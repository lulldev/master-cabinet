import React from 'react';
import { Provider } from 'react-redux'
import { App, View, Statusbar } from 'framework7-react';
import { store, stateKernel } from './store';
import { AuthProvider } from 'react-check-auth';
import routes from './routes';

// Framework7 parameters here
const f7params = {
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App routes
  routes,
  // App Framework7 Redux state kernel
  stateKernel,
  // Disable F7 automated routing for Links
  // clicks: {
  //   externalLinks: 'a[href="#"]'
  // },
  // Disable F7 automated routing for backdrops    
  // panel: {
  //   closeByBackdropClick: true
  // },
  // popup: {
  //   closeByBackdropClick: false
  // }
};

export default () => {
  return (
    <AuthProvider authUrl={'/index.php/api/auth_check'}>
      <Provider store={store}>
        <App params={f7params}>
          <Statusbar />
          <View id="main-view" url="/" main className="ios-edges"/>
        </App>
      </Provider>
    </AuthProvider>
  );
};
