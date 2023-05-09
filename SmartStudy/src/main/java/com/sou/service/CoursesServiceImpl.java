package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.CoursesDao;
import com.sou.model.Assignments;
import com.sou.model.Courses;


@Service
public class CoursesServiceImpl implements CoursesService {

	@Autowired
	private CoursesDao coursesdao;

	@Override
	public void add(Courses c) {
		// TODO Auto-generated method stub
		coursesdao.save(c);
	}

	@Override
	public void modify(Courses c) {
		// TODO Auto-generated method stub
		coursesdao.save(c);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		coursesdao.deleteById(id);
	}

	@Override
	public Courses getById(int id) {
		// TODO Auto-generated method stub
		Optional<Courses> opt = coursesdao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Courses> getAll() {
		// TODO Auto-generated method stub
		Iterable<Courses> itr = coursesdao.findAll();
		List<Courses> lst = new ArrayList<Courses>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

	@Override
	public List<Courses> getCoursesByStudentId(int id) {
		// TODO Auto-generated method stub
		
		return coursesdao.getCoursesByStudentId(id);
	}
	
}
