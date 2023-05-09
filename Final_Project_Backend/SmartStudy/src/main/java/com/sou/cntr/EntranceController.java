package com.sou.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sou.model.Entrance;
import com.sou.service.EntranceService;

@RestController
@RequestMapping("/entrance")
public class EntranceController {

	@Autowired
	private EntranceService eserv;
	
	@PostMapping(value = {"/entranceadd"})
	public Entrance EntranceAddForm(@RequestBody Entrance e) {
		eserv.add(e);
		return e;
	}
	@GetMapping(value = {"/entrancegetAll"})
	public List<Entrance> engtranceList(){
		return eserv.getAll();
	}
	@GetMapping(value= {"/getentrancebyID"})
	public Entrance getentrancebyID(@RequestParam(name = "id") int id){
		return eserv.getById(id);
	}
	@GetMapping(value= {"/deleteentrance"})
	public void deleteentrancebyID(@RequestParam(name = "id") int id){
		eserv.removeById(id);
	}
}
