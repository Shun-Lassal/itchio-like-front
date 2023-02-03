const setValue = (name, value) => {
  localStorage.setItem(name, value);
};

const getValue = (name) => {
  localStorage.getItem(name);
};

const removeValue = (name) => {
  localStorage.removeItem(name);
};

export default {
  setValue,
  getValue,
  removeValue,
};
