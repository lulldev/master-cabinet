import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import DynamicRoutePage from './pages/DynamicRoutePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import HistoryVisits from './pages/HistoryVisits';
import Visit from './pages/Visit';
import NotifySettings from './pages/NotifySettings';
import ClientComments from './pages/ClientComments';

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
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
