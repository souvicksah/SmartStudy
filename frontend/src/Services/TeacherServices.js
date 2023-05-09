import axios from "axios";

const BASE_URL = "http://localhost:8080/teacher";

export function courseadd(course, id) {
  return axios.post(`${BASE_URL}/courseAdd/${id}`, course);
}

export function getAllCourseByTeacherID(id) {
  return axios.get(`${BASE_URL}/getCourses/${id}`);
}
export function saveTeacher(teacher) {
  return axios.post(`${BASE_URL}/signup`, teacher);
}
export function checkLogin(user) {
  return axios.post(`${BASE_URL}/login`, user);
}
export function deleteCourseById(id) {
  return axios.delete(`${BASE_URL}/deletecourse/${id}`);
}
export function doLogout() {
  return axios.get(`${BASE_URL}/logout`);
}
export function getAllAssignmentFromServer(id) {
  return axios.get(`${BASE_URL}/assignmentreview/${id}`);
}
export function addRewards(assignmentID, reward) {
  return axios.get(`${BASE_URL}/assignmentreview/${reward}/${assignmentID}`);
}
export function getAllOrders(id) {
  return axios.get(`${BASE_URL}/getAllOrders/${id}`);
}
export function getAllStudentsFromServer(courseid) {
  return axios.get(`${BASE_URL}/getAllStudents/${courseid}`);
}
export function updateTeacher(teacher) {
  return axios.post(`${BASE_URL}/editprofile`, teacher);
}
export function forgotPasswordbyTeacher(email, pwd) {
  return axios.post(`${BASE_URL}/forgotpassword/${email}/${pwd}`);
}
