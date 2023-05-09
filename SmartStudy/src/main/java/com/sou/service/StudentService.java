package com.sou.service;

import java.util.List;

import com.sou.model.Student;

public interface StudentService {

	void add(Student s);
	void modify(Student s);
	void removeById(int id);
	Student getById(int id);
	List<Student> getAll();
	Student getStudentbyEmail(String email,String pwd);
}
