package com.sou.service;

import java.util.List;

import com.sou.model.Rewards;

public interface RewardsService {

	void add(Rewards r);
	void modify(Rewards r);
	void removeById(int id);
	Rewards getById(int id);
	List<Rewards> getAll();
}
