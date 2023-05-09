package com.sou.service;

import java.util.List;

import com.sou.model.Courses;
import com.sou.model.Teacher;

public interface TeacherService {

	void add(Teacher t);
	void modify(Teacher t);
	void removeById(int id);
	Teacher getById(int id);
	List<Teacher> getAll();
	List<Courses> getCoursesById(int id);
	Teacher getEmailbyTeacher(String email);
}
