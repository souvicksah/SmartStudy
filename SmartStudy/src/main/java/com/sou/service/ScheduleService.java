package com.sou.service;

import java.util.List;

import com.sou.model.Schedule;

public interface ScheduleService {

	void add(Schedule s);
	void modify(Schedule s);
	void removeById(int id);
	Schedule getById(int id);
	List<Schedule> getAll();
}
