import axios from "axios";
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {'Content-type':'application/json'} 
});
// api.interceptors.response.use(
//   function (response) {
//     console.log("interceptors >", response);
//     return response;
//   },
//   function (error) {
//     console.log("interceptors >", error);
//     return Promise.reject(error);}
// );
export default api;