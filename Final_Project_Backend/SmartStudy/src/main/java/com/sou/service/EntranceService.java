package com.sou.service;

import java.util.List;

import com.sou.model.Entrance;

public interface EntranceService {

	void add(Entrance e);
	void modify(Entrance e);
	void removeById(int id);
	Entrance getById(int id);
	List<Entrance> getAll();
}
