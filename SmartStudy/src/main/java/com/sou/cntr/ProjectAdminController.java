package com.sou.cntr;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sou.model.Internships;
import com.sou.model.Orders;
import com.sou.model.ProjectAdmin;
import com.sou.model.Student;
import com.sou.model.Teacher;
import com.sou.service.InternshipsService;
import com.sou.service.OrdersService;
import com.sou.service.ProjectAdminService;
import com.sou.service.StudentService;
import com.sou.service.TeacherService;


@RestController
@RequestMapping("/projectadmin")
public class ProjectAdminController {

	@Autowired
	private ProjectAdminService pserv;
	@Autowired
	private InternshipsService iserv;
	@Autowired
	private StudentService sserv;
	@Autowired
	private TeacherService tserv;
	@Autowired
	private OrdersService oserv;
	
	@PostMapping(value = {"/projectadminadd"})
	public ProjectAdmin projectadminAddForm(@RequestBody ProjectAdmin p) {
		pserv.add(p);
		return p;
	}
	@GetMapping(value = {"/projectadmingetAll"})
	public List<ProjectAdmin> ProjectAdminList(){
		return pserv.getAll();
	}
	//return axios.post(`${INTERNSHIP_URL}/allstudent`, create); 
	@GetMapping(value = {"/allstudent"})
	public List<Student> allStudentList(){
		return sserv.getAll();
	}
	@GetMapping(value = {"/allteacher"})
	public List<Teacher> allTeacherList(){
		return tserv.getAll();
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
	@GetMapping(value= {"/dashboard"})
	public HashMap<String,Integer> getAllOrdersbyId()
	{
		List<Orders> listoforders=oserv.getAll();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		HashMap<String,Integer> map=new HashMap<>();
		for(Orders o:listoforders)
		{
			Date dateWithoutTime;
			try {
			   dateWithoutTime = sdf. parse(sdf. format(o.getOrderDate()));
			   map.put(dateWithoutTime.toString().substring(0,11), map.getOrDefault(dateWithoutTime.toString().substring(0, 11),0)+1);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		return map;
	}
	@GetMapping(value= {"/orderdate"})
	public List<String> getAllOrdersdate()
	{
		List<Orders> listoforders=oserv.getAll();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		HashMap<String,Integer> map=new HashMap<>();
		for(Orders o:listoforders)
		{
			Date dateWithoutTime;
			try {
			   dateWithoutTime = sdf. parse(sdf. format(o.getOrderDate()));
			   map.put(dateWithoutTime.toString().substring(0,11), map.getOrDefault(dateWithoutTime.toString().substring(0, 11),0)+1);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		List<String> resultset=new ArrayList<>();
		for(Map.Entry<String, Integer> entry:map.entrySet())
		{
			resultset.add(entry.getKey());
		}
		return resultset;
	}
	@GetMapping(value= {"/ordercount"})
	public List<Integer> getAllOrdersCount()
	{
		List<Orders> listoforders=oserv.getAll();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		HashMap<String,Integer> map=new HashMap<>();
		for(Orders o:listoforders)
		{
			Date dateWithoutTime;
			try {
			   dateWithoutTime = sdf. parse(sdf. format(o.getOrderDate()));
			   map.put(dateWithoutTime.toString().substring(0,11), map.getOrDefault(dateWithoutTime.toString().substring(0, 11),0)+1);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		List<Integer> resultset=new ArrayList<>();
		for(Map.Entry<String, Integer> entry:map.entrySet())
		{
			resultset.add(entry.getValue());
		}
		return resultset;
	}
	@GetMapping(value= {"/deleteinternship/{id}"})
	public void deleteAssignment(@PathVariable(value = "id") int id)
	{
		iserv.removeById(id);
	}
}
