package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.sou.dao.EntranceDao;
import com.sou.model.Courses;
import com.sou.model.Entrance;

@Service
public class EntranceServiceImpl implements EntranceService{
	
	@Autowired
	private EntranceDao entrancedao;


	@Override
	public void add(Entrance e) {
		// TODO Auto-generated method stub
		entrancedao.save(e);
	}

	@Override
	public void modify(Entrance e) {
		// TODO Auto-generated method stub
		entrancedao.save(e);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		entrancedao.deleteById(id);
	}

	@Override
	public Entrance getById(int id) {
		// TODO Auto-generated method stub
		Optional<Entrance> opt = entrancedao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Entrance> getAll() {
		// TODO Auto-generated method stub
		Iterable<Entrance> itr = entrancedao.findAll();
		List<Entrance> lst = new ArrayList<Entrance>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

}
