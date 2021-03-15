import { api } from '../../services/Api';

export const setAxiosHeader = (token) => {
  console.log(token, 'setAxiosHeader');
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAxiosHeader = () => {
  api.defaults.headers.common['Authorization'] = null;
};
