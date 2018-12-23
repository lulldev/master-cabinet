import Home from './containers/HomeContainer';
import LeftMenu from './containers/PanelLeftContainer';
import Proceeds from './containers/Proceeds';
import NotFoundPage from './pages/NotFoundPage';
import NotifySettings from './pages/NotifySettings';
import Clients from './pages/Clients';
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
