const TOKEN = "token";
const USER_ID = "userId";

interface Storage {
  getToken: () => string | null;
  setToken: (token: string) => void;
  removeToken: () => void;

  getUserId: () => string | null;
  setUserId: (id: string) => void;
  removeUserId: () => void;

  clearAll: () => void;
}

const getToken = () => localStorage.getItem(TOKEN);
const setToken = (token: string) => localStorage.setItem(TOKEN, token);
const removeToken = () => localStorage.removeItem(TOKEN);

const getUserId = () => localStorage.getItem(USER_ID);
const setUserId = (id: string) => localStorage.setItem(USER_ID, id);
const removeUserId = () => localStorage.removeItem(USER_ID);

const clearAll = () => localStorage.clear();

const storage: Storage = {
  getToken,
  setToken,
  removeToken,
  getUserId,
  setUserId,
  removeUserId,
  clearAll,
};

export default storage;
