package com.sou.model;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Teacher {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int teacherID;
	@NotNull(message = "Name is not empty")
	private String teacherName;
	@NotNull(message = "Address is not empty")
	@Size(min = 2, max=50,message = "Address must be between 2 and 50 characters")
	private String teacherAddress;
	@NotNull(message = "Phone number is not empty")
	private String phone;
	@NotNull(message = "E-mail id is not empty")
	private String email;
	@NotNull(message = "Gender is not empty")
	private String gender;
	@NotNull(message = "Date Of Birth is not empty")
	private Date dob;
//	@NotNull(message = "Study Link is not empty")
	private String studylink;
	@NotNull(message = "Experience is not empty")
	private String experience;
	@NotNull(message = "Password is not empty")
	private String password;
	public int getTeacherID() {
		return teacherID;
	}
	public void setTeacherID(int teacherID) {
		this.teacherID = teacherID;
	}
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	public String getTeacherAddress() {
		return teacherAddress;
	}
	public void setTeacherAddress(String teacherAddress) {
		this.teacherAddress = teacherAddress;
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
	public String getStudylink() {
		return studylink;
	}
	public void setStudylink(String studylink) {
		this.studylink = studylink;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
