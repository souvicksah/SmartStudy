package com.sou.service;

import java.util.List;

import com.sou.model.Orders;

public interface OrdersService {

	void add(Orders o);
	void modify(Orders o);
	void removeById(int id);
	Orders getById(int id);
	List<Orders> getAll();
}
