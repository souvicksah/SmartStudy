package com.sou.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.Assignments;

public interface AssignmentsDao extends JpaRepository<Assignments, Integer>{

}
