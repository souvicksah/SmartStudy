package com.sou.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.Schedule;
public interface ScheduleDao extends CrudRepository<Schedule, Integer>{

}
