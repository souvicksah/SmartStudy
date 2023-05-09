package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.EntranceDao;
import com.sou.dao.InternshipDao;
import com.sou.model.Entrance;
import com.sou.model.Internships;

@Service
public class InternshipsServiceImpl implements InternshipsService {
	
	@Autowired
	private InternshipDao internshipsdao;

	@Override
	public void add(Internships i) {
		// TODO Auto-generated method stub
        		internshipsdao.save(i);
	}

	@Override
	public void modify(Internships i) {
		// TODO Auto-generated method stub
		internshipsdao.save(i);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		internshipsdao.deleteById(id);
	}

	@Override
	public Internships getById(int id) {
		// TODO Auto-generated method stub
		Optional<Internships> opt = internshipsdao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Internships> getAll() {
		// TODO Auto-generated method stub
		Iterable<Internships> itr = internshipsdao.findAll();
		List<Internships> lst = new ArrayList<Internships>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

}
