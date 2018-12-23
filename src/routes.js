import HomePage from './containers/HomeContainer';
import LeftMenu from './containers/PanelLeftContainer';
import NotFoundPage from './pages/NotFoundPage';
import NotifySettings from './pages/NotifySettings';
import Clients from './pages/Clients';
import ClientOrder from './pages/ClientOrder';
import ClientOrderReview from './pages/ClientOrderReview';
import Proceeds from './pages/Proceeds';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    panel: {
      component: LeftMenu,
    },
  },
  {
    path: '/clients/',
    component: Clients,
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
