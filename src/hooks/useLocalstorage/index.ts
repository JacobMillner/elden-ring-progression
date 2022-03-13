import { useState } from 'react';

const useLocalStorage = (keyName: string, defaultValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        console.log('value found!');
        return JSON.parse(value);
      } else {
        console.log('setting localStorage');
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.log('error', err);
      return defaultValue;
    }
  });

  const setValue = (newValue: string) => {
    try {
      console.log('setting', JSON.stringify(newValue));
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      // TODO: do something with this error
      console.log('seerrtting', err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
