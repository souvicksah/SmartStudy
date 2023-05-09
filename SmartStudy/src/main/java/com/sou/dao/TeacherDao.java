package com.sou.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sou.model.Student;
import com.sou.model.Teacher;
public interface TeacherDao extends CrudRepository<Teacher, Integer>,JpaRepository<Teacher, Integer>{
	@Query(value="SELECT * FROM teacher WHERE email LIKE :email",nativeQuery=true)
	Teacher getInfoByEmail(@Param(value="email") String email);
}
