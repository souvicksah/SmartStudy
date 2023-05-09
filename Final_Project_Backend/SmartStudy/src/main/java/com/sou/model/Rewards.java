package com.sou.model;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class Rewards {


	@Id
	private int rewardsID;
	private int rewardspoint;
	@ManyToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Student student;
	public int getRewardsID() {
		return rewardsID;
	}
	public void setRewardsID(int rewardsID) {
		this.rewardsID = rewardsID;
	}
	public int getRewardspoint() {
		return rewardspoint;
	}
	public void setRewardspoint(int rewardspoint) {
		this.rewardspoint = rewardspoint;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
}
