package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.OrdersDao;
import com.sou.model.Internships;
import com.sou.model.Orders;


@Service
public class OrderServiceImpl implements OrdersService {

	@Autowired
	private OrdersDao orderdao;

	@Override
	public void add(Orders o) {
		// TODO Auto-generated method stub
		orderdao.save(o);
	}

	@Override
	public void modify(Orders o) {
		// TODO Auto-generated method stub
		orderdao.save(o);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		orderdao.deleteById(id);
	}

	@Override
	public Orders getById(int id) {
		// TODO Auto-generated method stub
		Optional<Orders> opt = orderdao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Orders> getAll() {
		// TODO Auto-generated method stub
		Iterable<Orders> itr = orderdao.findAll();
		List<Orders> lst = new ArrayList<Orders>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}
	
}
