package com.sou.cntr;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sou.model.Assignments;
import com.sou.model.Courses;
import com.sou.model.Orders;
import com.sou.model.Rewards;
import com.sou.model.Student;
import com.sou.model.Teacher;
import com.sou.service.AssignmentsService;
import com.sou.service.CoursesService;
import com.sou.service.OrdersService;
import com.sou.service.RewardsService;
import com.sou.service.StudentService;
import com.sou.service.TeacherService;

@RestController
@RequestMapping("/teacher")
@CrossOrigin(value= {"http://localhost:3000/teacher"})
public class TeacherController {

	@Autowired
	private TeacherService tserv;
	@Autowired
	private CoursesService cserv;
	@Autowired
	private StudentService sserv;
	
	@Autowired
	private AssignmentsService aserv;
	@Autowired
	private RewardsService rserv;
	@Autowired
	private OrdersService oserv;
	
	
	@PostMapping(value = {"/signup"})
	public Teacher teacherAddForm(@RequestBody Teacher t) {
		tserv.add(t);
		return t;
	}
	@GetMapping(value = {"/teachergetAll"})
	public List<Teacher> teacherList(){
		return tserv.getAll();
	}
	@GetMapping(value= {"/getTeacherbyID"})
	public Teacher getteacherbyID(@RequestParam(name = "id") int id){
		return tserv.getById(id);
	}
	@GetMapping(value= {"/deleteTeacher"})
	public void deleteteacherbyID(@RequestParam(name = "id") int id){
		tserv.removeById(id);
	}
	@PostMapping(value = {"/courseAdd/{teacherid}"})
	public Courses couurseaddform(@PathVariable(value = "teacherid") int userId, @RequestBody Courses c) {
		System.out.println(c.toString());
		c.setTeacher(tserv.getById(userId));
		cserv.add(c);
		return c;
	}
	
	@GetMapping(value= {"/getCourses/{teacherid}"})
	public List<Courses> getAllCourses(@PathVariable(value = "teacherid") int userId){
		return tserv.getCoursesById(userId);
	}
//	/deletecourse/${id}
	@DeleteMapping(value= {"/deletecourse/{id}"})
	public ResponseEntity<?> deleteCourseById(@PathVariable(value = "id") int id){
		Courses c= cserv.getById(id);
		List<Assignments> lst=aserv.getAll();
		for(Assignments a : lst)
		{
			if(a.getCourses().getCourseId()==c.getCourseId())
			{
				aserv.removeById(a.getAssignmentID());
			}
		}
		List<Orders> listoforders=oserv.getAll();
		for(Orders o:listoforders)
		{
			if(o.getCourse().getCourseId()==c.getCourseId())
			{
				oserv.removeById(o.getOrderId());
			}
				
		}
		cserv.removeById(id);
		return new ResponseEntity<>(c,HttpStatus.OK); 
	}
	///assignmentreview/${id}
	@GetMapping(value= {"/assignmentreview/{id}"})
	public List<Assignments> getAllAssignment(@PathVariable(value = "id") int id){
		List<Assignments> lst=aserv.getAll();
		List<Assignments> res=new ArrayList();
		for(Assignments a:lst)
		{
			if(a.getCourses().getTeacher().getTeacherID()==id && a.getAssignmentStatus()==false)
			{
				res.add(a);
			}
		}
		return res;
	}
	///assignmentreview/${reward}/${assignmentID}
	@GetMapping(value= {"/assignmentreview/{reward}/{id}"})
	public Assignments addRewards(@PathVariable(value = "reward") int reward,@PathVariable(value = "id") int id){
		Rewards r=rserv.getById(aserv.getById(id).getRewards().getRewardsID());
		r.setRewardspoint(reward+r.getRewardspoint());
		rserv.add(r);
		aserv.getById(id).setAssignmentStatus(true);
		aserv.add(aserv.getById(id));
		return aserv.getById(id);
	}
	//axios.get(`${BASE_URL}/getAllOrders/${id}`);
	@GetMapping(value= {"/getAllOrders/{id}"})
	public ResponseEntity<?> getAllOrders(@PathVariable(value = "id") int id){
		List<Orders> listOrders=oserv.getAll();
		List<Courses> allcourses=cserv.getAll();
		List<Courses> coursesById=new ArrayList<Courses>();
		for(Courses c:allcourses)
		{
			if(c.getTeacher().getTeacherID()==id)
			{
				coursesById.add(c);
			}
	    }
	    List<Orders> resultSet=oserv.getAll();
		for(Orders o:listOrders)
		{
			int cid=o.getCourse().getCourseId();
			if(coursesById.contains(cserv.getById(cid)))
			{
				resultSet.add(o);
			}
		}
		Set<Orders> setorders=new HashSet<>();
		for(Orders o:resultSet)
		{
			setorders.add(o);
		}
		
		return new ResponseEntity<>(setorders,HttpStatus.OK);
	
    }
	//${BASE_URL}/getAllStudents/${courseid}
	@GetMapping(value= {"/getAllStudents/{courseid}"})
	public List<Student> getAllStudentsbycourseId(@PathVariable(value = "courseid") int courseid){
		List<Orders> listoforders=oserv.getAll();
		List<Student> studentlst=new ArrayList<>();
		for(Orders o:listoforders)
		{
			if(o.getCourse().getCourseId()==courseid)
			{
				studentlst.add(o.getStudent());
			}
		}
		return studentlst;
	}
	// editprofile
		@PostMapping(value = {"/editprofile"})
		public Teacher teacherUpdateForm(@RequestBody Teacher t) {
			tserv.add(t);
			return t;
		}

}
