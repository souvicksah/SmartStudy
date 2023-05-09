package com.sou.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sou.model.Orders;
import com.sou.service.OrdersService;


@RestController
@RequestMapping("/orders")
public class OrdersController {

	@Autowired
	private OrdersService oserv;
	
	@PostMapping(value = {"/orderadd"})
	public Orders OrderAddForm(@RequestBody Orders o) {
		oserv.add(o);
		return o;
	}
	@GetMapping(value = {"/ordergetAll"})
	public List<Orders> orderList(){
		return oserv.getAll();
	}
	@GetMapping(value= {"/getorderbyID"})
	public Orders getorderbyID(@RequestParam(name = "id") int id){
		return oserv.getById(id);
	}
	@GetMapping(value= {"/deleteorder"})
	public void deleteorderbyID(@RequestParam(name = "id") int id){
		oserv.removeById(id);
	}
}
