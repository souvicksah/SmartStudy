package com.sou.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sou.model.Orders;

public interface OrdersDao extends CrudRepository<Orders, Integer>{

}
