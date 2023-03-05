import axios from 'axios';
import Cookies from 'js-cookie';


export const isAuthenticated = async (token) => {
  try {
    // Kullanıcının kimliği doğrulanır.
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get('/api/user', { headers });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};


export const setToken = (token) => {
  Cookies.set('token', token);  
};

export const removeToken = () => {
  Cookies.remove('token');
  localStorage.removeItem('token');
};

export const getToken = () => {
  const token = Cookies.get('token');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return null;
};