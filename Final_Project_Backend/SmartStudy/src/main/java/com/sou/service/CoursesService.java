package com.sou.service;

import java.util.List;

import com.sou.model.Courses;

public interface CoursesService {

	void add(Courses c);
	void modify(Courses c);
	void removeById(int id);
	Courses getById(int id);
	List<Courses> getAll();
	List<Courses> getCoursesByStudentId(int id);
}
