
import fetch from 'cross-fetch';
import reducers from '../../core/reducers';

export const requestSignIn = reducers.login.requestSignIn;
export const responseSignIn = reducers.login.responseSignIn;
export const errorSignIn = reducers.login.errorSignIn;

export function signIn(login, password) {
  requestSignIn();
  return fetch(`http://localhost/auth`,
    {
      method: 'POST',
      body: JSON.stringify({ login, password }),
    })
    .then(
      (response) => {
        if (response.status !== 200) {
          errorSignIn({ statusText: response.statusText });
          return null;
        }
        return response.json();
      },
      (error) => {
        errorSignIn(error);
      },
    )
    .then(json => responseSignIn({ response: json }));
}

const login = {
  signIn,
};

export default {
  login,
};
