package com.sou.service;

import java.util.List;

import com.sou.model.Assignments;

import net.bytebuddy.implementation.bind.annotation.AllArguments.Assignment;


public interface AssignmentsService {

	void add(Assignments a);
	void modify(Assignments a);
	void removeById(int id);
	Assignments getById(int id);
	List<Assignments> getAll();
}
