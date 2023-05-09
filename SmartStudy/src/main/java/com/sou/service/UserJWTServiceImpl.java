package com.sou.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sou.dao.UserJWTDao;
import com.sou.model.UserJWT;

@Service
public class UserJWTServiceImpl implements UserJWTService {

	@Autowired
	private UserJWTDao udao;
	@Override
	public UserJWT register(UserJWT u) {
		// TODO Auto-generated method stub
		udao.save(u);
		return u;
	}

}
