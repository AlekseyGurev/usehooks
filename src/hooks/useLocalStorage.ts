import { useState } from 'react';

export function useLocalStorage(value: string) {
  function getToken(value: string) {
    const item = localStorage.getItem(value);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  const [token, setToken] = useState(() => getToken(value));

  function setItem(value: string) {
    setToken(value);
    localStorage.setItem('token', JSON.stringify(value));
  }

  function removeItem() {
    localStorage.removeItem('token');
    setToken('');
  }

  return [token, { setItem, removeItem }];
}
