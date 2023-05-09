package com.sou.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.Entrance;
public interface EntranceDao extends CrudRepository<Entrance, Integer>{

}
