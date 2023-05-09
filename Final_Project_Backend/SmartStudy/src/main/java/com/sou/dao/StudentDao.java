package com.sou.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.Student;
public interface StudentDao extends CrudRepository<Student, Integer>{

}
