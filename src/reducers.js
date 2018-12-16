import { wrapReducers } from 'redaction';
import { login } from './pages/loginPage/reducers';

export default wrapReducers({
  login,
});
