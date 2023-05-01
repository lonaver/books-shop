const KEY_LOCAL_STORAGE_THEME = 'THEME_PAGE';
export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';
export let dataTheme;

export const getTheme = () => {
  const response = localStorage.getItem(KEY_LOCAL_STORAGE_THEME);
  if (response) {
    dataTheme = JSON.parse(response);
  } else {
    dataTheme = LIGHT_THEME;
  }
};

export const setTheme = data => {
  //console.log('set ls', data);
  localStorage.setItem(KEY_LOCAL_STORAGE_THEME, JSON.stringify(data));
};
