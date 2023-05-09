package com.sou.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sou.model.Rewards;
import com.sou.service.RewardsService;


@RestController
@RequestMapping("/rewards")
public class RewardsController {

	@Autowired
	private RewardsService rserv;
	
	@PostMapping(value = {"/rewardsadd"})
	public Rewards rewardsAddForm(@RequestBody Rewards r) {
		rserv.add(r);
		return r;
	}
	@GetMapping(value = {"/rewardsgetAll"})
	public List<Rewards> rewardsList(){
		return rserv.getAll();
	}
	@GetMapping(value= {"/getRewardsbyID"})
	public Rewards getrewardsbyID(@RequestParam(name = "id") int id){
		return rserv.getById(id);
	}
	@GetMapping(value= {"/deleteRewards"})
	public void deleterewardsbyID(@RequestParam(name = "id") int id){
		rserv.removeById(id);
	}
}
