import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const key = 'dark-mode' as const;
  const [value, setValue] = useState(false);

  useEffect(() => {
    const existingValue = window.localStorage.getItem(key);
    const initialValue =
      existingValue === null
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : JSON.parse(existingValue);
    setValue(initialValue);
  }, []);

  useEffect(() => {
    document.documentElement.classList[value ? 'add' : 'remove']('dark');
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
};
