package com.sou.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.ProjectAdminDao;
import com.sou.model.Orders;
import com.sou.model.ProjectAdmin;

@Service
public class ProjectAdminServiceImpl implements ProjectAdminService{
	
	@Autowired
	private ProjectAdminDao projectAdmindao;

	@Override
	public void add(ProjectAdmin p) {
		// TODO Auto-generated method stub
		projectAdmindao.save(p);
		
	}

	@Override
	public void modify(ProjectAdmin p) {
		// TODO Auto-generated method stub
		projectAdmindao.save(p);
	}

	@Override
	public void removeById(int id) {
		// TODO Auto-generated method stub
		projectAdmindao.deleteById(id);
	}

	@Override
	public ProjectAdmin getById(int id) {
		// TODO Auto-generated method stub
		Optional<ProjectAdmin> opt = projectAdmindao.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

	@Override
	public List<ProjectAdmin> getAll() {
		// TODO Auto-generated method stub
		Iterable<ProjectAdmin> itr = projectAdmindao.findAll();
		List<ProjectAdmin> lst = new ArrayList<ProjectAdmin>();
		itr.forEach(ele->lst.add(ele));
		return lst;
	}

}
