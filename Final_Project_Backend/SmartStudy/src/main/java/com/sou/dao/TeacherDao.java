package com.sou.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.Teacher;
public interface TeacherDao extends CrudRepository<Teacher, Integer>{

}
