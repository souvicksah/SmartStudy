package com.sou.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.Internships;
public interface InternshipDao extends CrudRepository<Internships, Integer>{

}
