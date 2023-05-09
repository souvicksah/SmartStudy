package com.sou.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int studentID;
	@NotNull(message = "Name is not empty")
	private String studentName;
	@NotNull(message = "Address is not empty")
	private String studentAddress;
	@NotNull(message = "Phone number is not empty")
	private String phone;
	@NotNull(message = "E-mail id is not empty")
	private String email;
	@NotNull(message = "Gender is not empty")
	private String gender;
	@NotNull(message = "Date Of Birth is not empty")
	private Date dob;
	@NotNull(message = "Institute is not empty")
	private String institute;
	@NotNull(message = "Password is not empty")
	private String password;
	public int getStudentID() {
		return studentID;
	}
	public void setStudentID(int studentID) {
		this.studentID = studentID;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getStudentAddress() {
		return studentAddress;
	}
	public void setStudentAddress(String studentAddress) {
		this.studentAddress = studentAddress;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getInstitute() {
		return institute;
	}
	public void setInstitute(String institute) {
		this.institute = institute;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Student [studentID=" + studentID + ", studentName=" + studentName + ", studentAddress=" + studentAddress
				+ ", phone=" + phone + ", email=" + email + ", gender=" + gender + ", dob=" + dob + ", institute="
				+ institute + ", password=" + password + "]";
	}
	
	
}
