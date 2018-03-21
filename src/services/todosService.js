import axios from "axios";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getTodosFromApi = async () => {
  const todosFromApi = (await axios(
    "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5"
  )).data;
  await timeout(1000);
  return todosFromApi;
};
