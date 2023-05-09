package com.sou.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sou.model.Student;
public interface StudentDao extends CrudRepository<Student, Integer>,JpaRepository<Student, Integer>{
	@Query(value="SELECT * FROM student WHERE email LIKE :email",nativeQuery=true)
	Student getInfoByEmail(@Param(value="email") String email);

}
