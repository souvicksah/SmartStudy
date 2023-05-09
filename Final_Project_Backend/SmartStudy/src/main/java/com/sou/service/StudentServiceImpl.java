package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.StudentDao;
import com.sou.model.Student;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentDao studentdao;

	@Override
	public void add(Student s) {
		// TODO Auto-generated method stub
		studentdao.save(s);
	}

	@Override
	public void modify(Student s) {
		// TODO Auto-generated method stub
		studentdao.save(s);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		studentdao.deleteById(id);
	}

	@Override
	public Student getById(int id) {
		// TODO Auto-generated method stub
		Optional<Student> opt = studentdao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Student> getAll() {
		// TODO Auto-generated method stub
		Iterable<Student> itr = studentdao.findAll();
		List<Student> lst = new ArrayList<Student>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

}
