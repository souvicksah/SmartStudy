import axios from "axios";

const BASE_URL = "http://localhost:8080/admin";
const INTERNSHIP_URL = "http://localhost:8080/projectadmin";
export function checkLogin(user) {
  return axios.post(`${BASE_URL}/login`, user);
}

export function doLogout() {
  return axios.get(`${BASE_URL}/logout`);
}
export function saveInternship(create) {
  return axios.post(`${INTERNSHIP_URL}/addinternship`, create); //post function will return promise so we have to return this
}
export function AllStudent() {
  return axios.get(`${INTERNSHIP_URL}/allstudent`);
}
export function AllTeacher() {
  return axios.get(`${INTERNSHIP_URL}/allteacher`);
}
export function getAllOrders() {
  return axios.get(`${INTERNSHIP_URL}/dashboard`);
}
export function getAllOrdersDate() {
  return axios.get(`${INTERNSHIP_URL}/orderdate`);
}
export function getAllOrdersCount() {
  return axios.get(`${INTERNSHIP_URL}/ordercount`);
}
export function deleteInternshipFromServerAdmin(id) {
  return axios.get(`${INTERNSHIP_URL}/deleteinternship/${id}`);
}
