package com.sou.model;
import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class Courses {
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   private int courseId;
   @NotNull
   private String courseName;
   @NotNull
   private String description;
   @NotNull
   private LocalDateTime startTime;
   @NotNull
   private LocalDateTime endTime;
   @NotNull
   private String duration;
   @NotNull
   private float cost;
   @ManyToOne
   @OnDelete(action = OnDeleteAction.CASCADE)
   private Teacher teacher;
   
public LocalDateTime getStartTime() {
	return startTime;
}
public void setStartTime(LocalDateTime startTime) {
	this.startTime = startTime;
}
public LocalDateTime getEndTime() {
	return endTime;
}
public void setEndTime(LocalDateTime endTime) {
	this.endTime = endTime;
}
public int getCourseId() {
	return courseId;
}
public void setCourseId(int courseId) {
	this.courseId = courseId;
}
public String getCourseName() {
	return courseName;
}
public void setCourseName(String courseName) {
	this.courseName = courseName;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getDuration() {
	return duration;
}
public void setDuration(String duration) {
	this.duration = duration;
}
public float getCost() {
	return cost;
}
public void setCost(float cost) {
	this.cost = cost;
}
public Teacher getTeacher() {
	return teacher;
}
public void setTeacher(Teacher teacher) {
	this.teacher = teacher;
}
   
}
