package com.sou.model;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class Assignments {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int assignmentID;
	@NotNull   
	private String assignmentName;
	@NotNull
	private boolean assignmentStatus;
	@NotNull
	private String assignmentLink;
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Rewards rewards;
	
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Student student;
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Courses courses;
	public int getAssignmentID() {
		return assignmentID;
	}
	public void setAssignmentID(int assignmentID) {
		this.assignmentID = assignmentID;
	}
	public String getAssignmentName() {
		return assignmentName;
	}
	public void setAssignmentName(String assignmentName) {
		this.assignmentName = assignmentName;
	}
	public boolean getAssignmentStatus() {
		return assignmentStatus;
	}
	public void setAssignmentStatus(boolean assignmentStatus) {
		this.assignmentStatus = assignmentStatus;
	}
	public Rewards getRewards() {
		return rewards;
	}
	public void setRewards(Rewards rewards) {
		this.rewards = rewards;
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
	public String getAssignmentLink() {
		return assignmentLink;
	}
	public void setAssignmentLink(String assignmentLink) {
		this.assignmentLink = assignmentLink;
	}
	
	
}
