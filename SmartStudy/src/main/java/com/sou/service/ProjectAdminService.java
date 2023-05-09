package com.sou.service;

import java.util.List;

import com.sou.model.ProjectAdmin;

public interface ProjectAdminService {

	void add(ProjectAdmin p);
	void modify(ProjectAdmin p);
	void removeById(int id);
	ProjectAdmin getById(int id);
	List<ProjectAdmin> getAll();
}
