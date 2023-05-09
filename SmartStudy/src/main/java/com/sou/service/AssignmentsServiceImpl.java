package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.AssignmentsDao;
import com.sou.model.Assignments;

@Service
public class AssignmentsServiceImpl implements AssignmentsService {

	@Autowired
	private AssignmentsDao assignmentdao;

	@Override
	public void add(Assignments a) {
		// TODO Auto-generated method stub
		assignmentdao.save(a);
	}

	@Override
	public void modify(Assignments a) {
		// TODO Auto-generated method stub
		assignmentdao.save(a);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		 assignmentdao.deleteById(id);
	}

	@Override
	public Assignments getById(int id) {
		// TODO Auto-generated method stub
		Optional<Assignments> opt = assignmentdao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Assignments> getAll() {
		// TODO Auto-generated method stub
		Iterable<Assignments> itr = assignmentdao.findAll();
		List<Assignments> lst = new ArrayList<Assignments>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

	
}
