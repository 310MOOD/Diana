export const requestFakeDataAPI = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
