// Get data from our API for a specifical product
const addItemLocalStorage = async (item) => {
  let data = localStorage.getItem("user");
  let JSONdata = JSON.parse(data);
  // error handling (existant item)
  if (JSONdata) return false;
  localStorage.setItem("user", JSON.stringify(item));
  return true;
};
const readLocalStorage = async () => {
  return (await localStorage.getItem("user")) == null
    ? false
    : JSON.parse(localStorage.getItem("user"));
};
const getDataAPI = async (id) => {

  const apiUrl = `https://groupomania-myback.herokuapp.com/api/auth/${id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(apiUrl, options);
  const result = await response.json();
  return result;
};

const getPostsbyId = async (id) => {
  const apiUrl = `https://groupomania-myback.herokuapp.com/api/posts/user/${id}`;
  const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
      },
  };
  const response = await fetch(apiUrl, options);
  const result = await response.json();
  return result.reverse();
};
module.exports.addItemLocalStorage = addItemLocalStorage;
module.exports.readLocalStorage = readLocalStorage;
module.exports.getDataAPI = getDataAPI;
module.exports.getPostsbyId = getPostsbyId;
