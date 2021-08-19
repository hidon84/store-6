type Key = string;

export const setValueOnLocalStorage = (key: Key, value: unknown) => {
  const val = JSON.stringify(value);
  localStorage.setItem(key, val);
};

export const getValueOnLocalStorage = (key: Key) => {
  const val = localStorage.getItem(key);
  return JSON.parse(val);
};

export const removeValueOnLocalStorage = (key: Key) => {
  localStorage.removeItem(key);
};
