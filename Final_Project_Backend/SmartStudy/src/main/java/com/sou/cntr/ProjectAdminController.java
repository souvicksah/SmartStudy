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
import com.sou.model.ProjectAdmin;
import com.sou.service.InternshipsService;
import com.sou.service.ProjectAdminService;


@RestController
@RequestMapping("/projectadmin")
public class ProjectAdminController {

	@Autowired
	private ProjectAdminService pserv;
	@Autowired
	private InternshipsService iserv;
	
	@PostMapping(value = {"/projectadminadd"})
	public ProjectAdmin projectadminAddForm(@RequestBody ProjectAdmin p) {
		pserv.add(p);
		return p;
	}
	@GetMapping(value = {"/projectadmingetAll"})
	public List<ProjectAdmin> ProjectAdminList(){
		return pserv.getAll();
	}
	@GetMapping(value= {"/getProjectAdminbyID"})
	public ProjectAdmin getprojectAdminbyID(@RequestParam(name = "id") int id){
		return pserv.getById(id);
	}
	@GetMapping(value= {"/deleteProjectAdmin"})
	public void deleteprojectadminbyID(@RequestParam(name = "id") int id){
		pserv.removeById(id);
	}
	@PostMapping(value = {"/addinternship"})
	public Internships internshipAddForm(@RequestBody Internships p) {
		iserv.add(p);
		return p;
	}
}
