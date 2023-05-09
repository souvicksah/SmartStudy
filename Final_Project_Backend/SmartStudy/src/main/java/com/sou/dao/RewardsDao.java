package com.sou.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.Rewards;
public interface RewardsDao extends CrudRepository<Rewards, Integer>{

}
