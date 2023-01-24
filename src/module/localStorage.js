const getLocalStorage = () => JSON.parse(localStorage.getItem('arrayList'));
const setLocalStorage = (item) => localStorage.setItem('arrayList', JSON.stringify(item));

export { getLocalStorage, setLocalStorage };