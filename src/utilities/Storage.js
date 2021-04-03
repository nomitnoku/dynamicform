const Storage = window.localStorage;

const setFormData = (type, data) => Storage.setItem(
  type,
  JSON.stringify(data),
);

const getFormData = (type) => JSON.parse(Storage.getItem(type));

export default {
  setFormData,
  getFormData,
};
