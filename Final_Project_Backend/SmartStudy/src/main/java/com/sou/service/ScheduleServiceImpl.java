package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.ScheduleDao;
import com.sou.model.Rewards;
import com.sou.model.Schedule;

@Service
public class ScheduleServiceImpl implements ScheduleService {
	

	@Autowired
	private ScheduleDao scheduledao;
	@Override
	public void add(Schedule s) {
		// TODO Auto-generated method stub
		scheduledao.save(s);
	}

	@Override
	public void modify(Schedule s) {
		// TODO Auto-generated method stub
		scheduledao.save(s);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		scheduledao.deleteById(id);
	}

	@Override
	public Schedule getById(int id) {
		// TODO Auto-generated method stub
		Optional<Schedule> opt = scheduledao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Schedule> getAll() {
		// TODO Auto-generated method stub
		Iterable<Schedule> itr = scheduledao.findAll();
		List<Schedule> lst = new ArrayList<Schedule>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

}
