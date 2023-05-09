package com.sou.service;

import java.util.List;

import com.sou.model.Internships;

public interface InternshipsService {

	void add(Internships i);
	void modify(Internships i);
	void removeById(int id);
	Internships getById(int id);
	List<Internships> getAll();
}
