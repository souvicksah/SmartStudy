import axios from "axios";

const BASE_URL = "http://localhost:8080/student";

// after installing npm i axios mention below command to make use of axios library

export function saveInternship(create) {
  return axios.post(BASE_URL, create); //post function will return promise so we have to return this
}

export function getAllInternshipFromServer() {
  return axios.get(`${BASE_URL}/allinternship`); //returning complete promise from this service layer
  //axios internally working as ajax..but we dont have to write whole fetch data and all in codes
}

export function deleteInternshipFromServer(intid) {
  console.log(intid);
  return axios.delete(`${BASE_URL}/${intid}`);
}
