import Axios from "axios";

export const fetchRSSFeed = async () => {
  const { data } =
    (await Axios.get(
      "https://v1.nocodeapi.com/kumar_gandharv_singh/medium/llxMEGEVcueXFRJt?perPage=20&page=1"
    )) || {};
  return data;
};

export const setItemsInLocalStorage = (items) => {
  if (items.length) {
    items.forEach((item) => {
      const key = Object.keys(item)[0];
      localStorage.setItem(key, JSON.stringify(item[key]));
    });
  }
};
export const getItemFromLocalStorage = (itemKey) => {
  return JSON.parse(localStorage.getItem(itemKey));
};

export const iemoveItemsInLocalStorage = (items) => {
  if (items.length) {
    items.forEach((key) => {
      localStorage.removeItem(key);
    });
  }
};
