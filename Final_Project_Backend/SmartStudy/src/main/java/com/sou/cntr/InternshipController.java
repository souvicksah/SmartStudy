package com.sou.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sou.model.Internships;
import com.sou.service.InternshipsService;


@RestController
@RequestMapping("/internship")
public class InternshipController {

	@Autowired
	private  InternshipsService iserv;
	
	@PostMapping(value = {"/internshipadd"})
	public Internships internshipAddForm(@RequestBody  Internships i) {
		iserv.add(i);
		return i;
	}
	@GetMapping(value = {"/internshipgetAll"})
	public List<Internships> internshipList(){
		return iserv.getAll();
	}
	@GetMapping(value= {"/getInternshipbyID"})
	public Internships getInternshipbyID(@RequestParam(name = "id") int id){
		return iserv.getById(id);
	}
	@GetMapping(value= {"/deleteInternship"})
	public void deleteInternshipbyID(@RequestParam(name = "id") int id){
		iserv.removeById(id);
	}
}
