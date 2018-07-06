import fakeData from "./fake_data";

// export const requestFakeDataAPI = () =>
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .catch(error => {
//       console.log(error);
//     });

export const requestFakeDataAPI = () =>
  new Promise(resolve => {
    setTimeout(resolve(fakeData), 1000);
  });
