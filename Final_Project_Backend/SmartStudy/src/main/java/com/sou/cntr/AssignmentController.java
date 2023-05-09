package com.sou.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sou.model.Assignments;
import com.sou.service.AssignmentsService;

@RestController
@RequestMapping("/assignment")
public class AssignmentController {

	@Autowired
	private AssignmentsService aserv;
	
	@PostMapping(value = {"/assignmentadd"})
	public Assignments assignmentAddForm(@RequestBody Assignments a) {
		aserv.add(a);
		return a;
	}
	@GetMapping(value = {"/assignmentgetAll"})
	public List<Assignments> assignmnetList(){
		return aserv.getAll();
	}
	@GetMapping(value= {"/getassignmentbyID"})
	public Assignments getassignmentbyID(@RequestParam(name = "id") int id){
		return aserv.getById(id);
	}
	@GetMapping(value= {"/deleteAssignment"})
	public void deleteassignmentbyID(@RequestParam(name = "id") int id){
		aserv.removeById(id);
	}
}
