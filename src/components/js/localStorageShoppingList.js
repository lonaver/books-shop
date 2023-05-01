const KEY_LOCAL_STORAGE_SHOPPING_LIST = 'SHOPPING LIST';

export const getShoppingList = () => {
  let dataShoppingList = [];
  const response = localStorage.getItem(KEY_LOCAL_STORAGE_SHOPPING_LIST);
  if (response) {
    dataShoppingList = JSON.parse(response);
  }
  return dataShoppingList;
};

export const setShoppingList = data => {
  localStorage.setItem(KEY_LOCAL_STORAGE_SHOPPING_LIST, JSON.stringify(data));
};
