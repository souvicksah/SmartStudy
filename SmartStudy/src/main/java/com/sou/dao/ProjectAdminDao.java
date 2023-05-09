package com.sou.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.ProjectAdmin;

public interface ProjectAdminDao extends CrudRepository<ProjectAdmin, Integer>{

}
