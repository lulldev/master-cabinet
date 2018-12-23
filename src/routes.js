import Home from './containers/HomeContainer';
import LeftMenu from './containers/PanelLeftContainer';
import Proceeds from './containers/Proceeds';
import ClientRecords from './containers/ClientRecords';
import ClientRecordOrder from './containers/ClientRecordOrder';
import NotifySettings from './containers/NotifySettings';
import NotFoundPage from './pages/NotFoundPage';

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
    component: ClientRecordOrder,
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
