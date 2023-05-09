package com.sou.model;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Entrance {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int entranceId;
	private String entranceName;
	private int marks;
	@ManyToOne
	private Student student;
	@ManyToOne
	private Courses courses;
	public int getEntranceId() {
		return entranceId;
	}
	public void setEntranceId(int entranceId) {
		this.entranceId = entranceId;
	}
	public String getEntranceName() {
		return entranceName;
	}
	public void setEntranceName(String entranceName) {
		this.entranceName = entranceName;
	}
	public int getMarks() {
		return marks;
	}
	public void setMarks(int marks) {
		this.marks = marks;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public Courses getCourses() {
		return courses;
	}
	public void setCourses(Courses courses) {
		this.courses = courses;
	}
	
}
