import axios from "axios";

const BASE_URL = "http://localhost:8080/student";

export function insert(user) {
  return axios.post(`${BASE_URL}/userAdd`, user);
}
//http://localhost:8080/student/getAllCourses/{id}
export function getAllCoursesFromServer(id) {
  return axios.get(`${BASE_URL}/listofcourses/${id}`);
}
export function saveAssignment(assignment) {
  return axios.post(
    `${BASE_URL}/saveassignment/${assignment.studentId}/${assignment.courseId}`,
    assignment
  );
}
export function getAllAssignments(id) {
  return axios.get(`${BASE_URL}/assignments/${id}`);
}
export function getAllCoursesById(id) {
  return axios.get(`${BASE_URL}/coursesbystudentid/${id}`);
}
export function getAllRewards(id) {
  return axios.get(`${BASE_URL}/rewards/${id}`);
}

export function afterRedeem(value, id) {
  return axios.get(`${BASE_URL}/rewardsreedem/${value}/${id}`);
}
export function saveStudent(student) {
  return axios.post(`${BASE_URL}/signup`, student);
}
export function checkLogin(user) {
  return axios.post(`${BASE_URL}/login`, user);
}
export function deleteAssignment(id) {
  return axios.delete(`${BASE_URL}/deleteassignment/${id}`);
}
export function doLogout() {
  return axios.get(`${BASE_URL}/logout`);
}
///student/paynow/${event.target.value}
export function dopay(id) {
  return axios.get(`${BASE_URL}/paynow/${id}`);
}
//const BASE_URL = "http://localhost:8080/student/payforcourse/{id}";
export function getcourseDetailsFromServer(id) {
  return axios.get(`${BASE_URL}/payforcourse/${id}`);
}
//const BASE_URL = "http://localhost:8080/student/order/{id}";
export function doOrder(course, id) {
  return axios.post(`${BASE_URL}/order/${id}`, course);
}
export function updateStudent(student) {
  return axios.post(`${BASE_URL}/editprofile`, student);
}
export function forgotPassword(email, pwd) {
  return axios.post(`${BASE_URL}/forgotpassword/${email}/${pwd}`);
}
