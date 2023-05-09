package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.CoursesDao;
import com.sou.dao.TeacherDao;
import com.sou.model.Courses;
import com.sou.model.Student;
import com.sou.model.Teacher;

@Service
public class TeacherServiceImpl implements TeacherService{
	
	@Autowired
	private TeacherDao teacherdao;
	@Autowired
	private CoursesDao coursesdao;
	

	@Override
	public void add(Teacher t) {
		// TODO Auto-generated method stub
	teacherdao.save(t);
	}

	@Override
	public void modify(Teacher t) {
		// TODO Auto-generated method stub
		teacherdao.save(t);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		teacherdao.deleteById(id);
	}

	@Override
	public Teacher getById(int id) {
		// TODO Auto-generated method stub
		Optional<Teacher> opt = teacherdao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<Teacher> getAll() {
		// TODO Auto-generated method stub
		Iterable<Teacher> itr = teacherdao.findAll();
		List<Teacher> lst = new ArrayList<Teacher>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

	@Override
	public List<Courses> getCoursesById(int id) {
		// TODO Auto-generated method stub
		
		return coursesdao.getCourseByID(id);
	}

	@Override
	public Teacher getEmailbyTeacher(String email) {
		// TODO Auto-generated method stub
		return teacherdao.getInfoByEmail(email);
	}

}
