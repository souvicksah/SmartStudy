package com.sou.model;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Internships {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int internshipID;
	private String internshipName;
	private String internshipProfile;
	private String description;
	private Date lastDate;
	private String applyLink;
	private String companyName;
	public int getInternshipID() {
		return internshipID;
	}
	public void setInternshipID(int inyternshipID) {
		this.internshipID = inyternshipID;
	}
	public String getInternshipName() {
		return internshipName;
	}
	public void setInternshipName(String internshipName) {
		this.internshipName = internshipName;
	}
	public String getInternshipProfile() {
		return internshipProfile;
	}
	public void setInternshipProfile(String internshipProfile) {
		this.internshipProfile = internshipProfile;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getLastDate() {
		return lastDate;
	}
	public void setLastDate(Date lastDate) {
		this.lastDate = lastDate;
	}
	public String getApplyLink() {
		return applyLink;
	}
	public void setApplyLink(String applyLink) {
		this.applyLink = applyLink;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
}
