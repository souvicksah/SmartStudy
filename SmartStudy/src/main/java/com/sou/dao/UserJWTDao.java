package com.sou.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sou.model.UserJWT;

public interface UserJWTDao extends JpaRepository<UserJWT,Integer> {

}
