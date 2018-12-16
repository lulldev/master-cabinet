import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/loginPage/LoginPage';
import HistoryVisits from './pages/HistoryVisits';
import Visit from './pages/Visit';
import NotifySettings from './pages/NotifySettings';
import ClientComments from './pages/ClientComments';
import Clients from './pages/Clients';
import ClientOrder from './pages/ClientOrder';
import ClientOrderReview from './pages/ClientOrderReview';
import Proceeds from './pages/Proceeds';

import LeftMenu from './components/LeftMenu';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/left-menu/',
    component: LeftMenu,
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
    path: '/history-visits/',
    component: HistoryVisits,
  },
  {
    path: '/visit/',
    component: Visit,
  },
  {
    path: '/notify-settings/',
    component: NotifySettings,
  },
  {
    path: '/client-comments/',
    component: ClientComments,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
