import Home from './containers/HomeContainer';
import LeftMenu from './containers/PanelLeftContainer';
import Proceeds from './containers/Proceeds';
import ClientRecords from './containers/ClientRecords';

import NotFoundPage from './pages/NotFoundPage';
import NotifySettings from './pages/NotifySettings';
import ClientOrder from './pages/ClientOrder';
import ClientOrderReview from './pages/ClientOrderReview';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/panel-left/',
    panel: {
      component: LeftMenu,
    },
  },
  {
    path: '/clients/',
    component: ClientRecords,
  },
  {
    path: '/order/',
    component: ClientOrder,
  },
  {
    path: '/review/',
    component: ClientOrderReview,
  },
  {
    path: '/proceeds/',
    component: Proceeds,
  },
  {
    path: '/notify-settings/',
    component: NotifySettings,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
