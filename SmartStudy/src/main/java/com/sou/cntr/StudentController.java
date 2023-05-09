package com.sou.cntr;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.json.JSONObject;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.sou.model.Assignments;
import com.sou.model.Courses;
import com.sou.model.Internships;
import com.sou.model.Orders;
import com.sou.model.Rewards;
import com.sou.model.Student;
import com.sou.model.UserJWT;
import com.sou.service.AssignmentsService;
import com.sou.service.CoursesService;
import com.sou.service.InternshipsService;
import com.sou.service.OrdersService;
import com.sou.service.RewardsService;
import com.sou.service.StudentService;
import com.sou.service.UserJWTService;

@RestController
@RequestMapping("/student")
@CrossOrigin(value= {"http://localhost:3000/student"})
public class StudentController {

	@Autowired
	private StudentService sserv;
	@Autowired
	private CoursesService cserv;
	@Autowired
	private AssignmentsService aserv;
	@Autowired
	private RewardsService rserv;
	@Autowired
	private InternshipsService iserv;
	@Autowired
	private OrdersService oserv;
	@Autowired
	private UserJWTService userv;
	
//	http://localhost:8080/student/signup
	@PostMapping(value = {"/signup"})
	public ResponseEntity<?> studentAddForm(@RequestBody Student s) {
//		if(session.getAttribute("id")==null) {
		sserv.add(s);
		UserJWT userjwt=new UserJWT();
		userjwt.setRole("Student");
		userjwt.setPassword(s.getPassword());
		userjwt.setUseremail(s.getEmail());
		userv.register(userjwt);
		System.out.println(s);
		Rewards r =new Rewards();
		r.setRewardsID(s.getStudentID());
		r.setStudent(s);
		r.setRewardspoint(0);
		rserv.add(r);
		System.out.println(s);
		return new ResponseEntity<>(s, HttpStatus.OK);
//		}
//		else
//			return new ResponseEntity<>(null, HttpStatus.OK);
			
	}
	@GetMapping(value = {"/studentgetAll"})
	public List<Student> StudentList(HttpSession session){
		//if(session.getAttribute("id")!=null && session.getAttribute("password")!=null) {
		return sserv.getAll();
		//}
		//return null;
	}
	@GetMapping(value= {"/getStudentbyId"})
	public Student getstudentbyID(@RequestParam(name = "id") int id){
		return sserv.getById(id);
	}
	@GetMapping(value= {"/deleteStudent"})
	public void deletestudentbyID(@RequestParam(name = "id") int id){
		sserv.removeById(id);
	}
	//http://localhost:8080/student/listofcourses  get all the available courses which are not ordered
		@GetMapping(value= {"/listofcourses/{id}"})
		public List<Courses> getcourses(@PathVariable(value = "id") int id){
				List<Orders> olist=oserv.getAll();
				List<Courses> clist=new ArrayList<>();
				List<Courses> resultset=new ArrayList<>();
				for(Orders o:olist)
				{
					if(o.getStudent().getStudentID()==id)
						clist.add(o.getCourse());
				}
				List<Courses> allcourses=cserv.getAll();
				for(Courses c:allcourses)
				{
					if(!clist.contains(c))
					{
						resultset.add(c);
					}
				}
				return resultset;
			
		}
		@PostMapping(value = {"/saveassignment/{studentid}/{courseid}"})
		public List<Assignments> assignmentAddForm(@PathVariable(value = "studentid") int userId,@PathVariable(value = "courseid") int courseid,@RequestBody Assignments a) {
			System.out.println(a);
			Assignments a1=new Assignments();
			a1.setAssignmentName(a.getAssignmentName());
			a1.setAssignmentStatus(a.getAssignmentStatus());
			a1.setAssignmentLink(a.getAssignmentLink());
			a1.setCourses(cserv.getById(courseid));
			a1.setStudent(sserv.getById(userId));
			a1.setRewards(rserv.getById(userId));
			List<Assignments> res=new ArrayList<>();
			List<Assignments> lst=aserv.getAll();
			aserv.add(a1);
			for(Assignments ass:lst)
			{
				if(ass.getStudent().getStudentID()==userId)
				{
					//System.out.println(id+" "+a.getStudent().getStudentID());
					res.add(ass);
				}
			}
			System.out.println(res);
			return res;
		}
		//coursesbystudentid! get the courses which are already bought by student
		@GetMapping(value= {"/coursesbystudentid/{id}"})
		public List<Courses> coursesbystudentid(@PathVariable(value = "id") int id){
				return cserv.getCoursesByStudentId(id);
		}
		
		@GetMapping(value= {"/assignments/{id}"})
		public List<Assignments> getAssignments(@PathVariable(value = "id") int id){
			List<Assignments> res=new ArrayList<>();
			List<Assignments> lst=aserv.getAll();
			for(Assignments a:lst)
			{
				if(a.getStudent().getStudentID()==id)
				{
					System.out.println(id+" "+a.getStudent().getStudentID());
					res.add(a);
				}
			}
			System.out.println(res);
			return res;
		}
		@GetMapping(value= {"/allinternship"})
		public List<Internships> getallinternship(){
			return iserv.getAll();
		}
		@GetMapping(value= {"/rewardsreedem/{value}/{id}"})
		public Rewards getrewardsbyid(@PathVariable(value = "id") int id, @PathVariable(value = "value") int value){
			Rewards r = rserv.getById(id);
			r.setRewardspoint(r.getRewardspoint()-value);
			r.setRewardsID(id);
			rserv.add(r);
			return r;
		}
		
		@GetMapping(value= {"/rewards/{id}"})
		public Rewards getrewardsbyid(@PathVariable(value = "id") int id){
			
			return rserv.getById(id);
		}
		//${BASE_URL}/deleteassignment/${id}	
		@DeleteMapping(value= {"/deleteassignment/{id}"})
		public ResponseEntity<?> deleteAssignmentbyid(@PathVariable(value = "id") int id){
			Assignments a=aserv.getById(id);
			aserv.removeById(id);
			return new ResponseEntity<>(a,HttpStatus.OK);
		}
		//"http://localhost:8080/student/payforcourse/{id}";
		@GetMapping(value= {"/payforcourse/{id}"})
		public Courses getcourseforpay(@PathVariable(value = "id") int id){
			return cserv.getById(id);
	
		}
		
		//"http://localhost:8080/student/order/{id}";
		@PostMapping(value= {"/order/{id}"})
		public ResponseEntity<?> doPay(@RequestBody Courses c,@PathVariable(value = "id") int id){
			Date dNow = new Date( );
			Orders o=new Orders();
			o.setCost(c.getCost());
			o.setCourse(c);
			o.setOrderDate(dNow);
			o.setStudent(sserv.getById(id));
		    oserv.add(o);
		    return new ResponseEntity(o,HttpStatus.OK);
		}
		// /editprofile
				@PostMapping(value = {"/editprofile"})
				public ResponseEntity<?> studentUpdateForm(@RequestBody Student s) {
//					if(session.getAttribute("id")==null) {
					sserv.add(s);
					System.out.println(s);
					
					return new ResponseEntity<>(s, HttpStatus.OK);
						
				}
				@PostMapping(value= {"/paynow/cre"})
				@ResponseBody()
				public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
					
					System.out.println(data);
					int amt =Integer.parseInt(data.get("amount").toString());
					
						var client =new RazorpayClient("rzp_test_0op6Uisax8F6uF", "FBWJXPHg6IOulx5GDTwrvbUT");
						
						JSONObject ob = new JSONObject();
						ob.put("amount", amt*100);
						ob.put("currency", "INR");
						ob.put("payment_capture", 1);
						ob.put("receipt", "txn_235425");
						
						//create order
						
						Order order = client.orders.create(ob);
						
						//System.out.print(order);
				
						//System.out.print("Payment executed");
					return order.toString();
				}
				//forgot password
				//${BASE_URL}/forgotpassword/${email}/${pwd}`
				@PostMapping(value= {"/forgotpassword/{email}/{password}"})
				public Student forgotUpdatePassword(@PathVariable(value="email") String email, @PathVariable(value="password") String password)
				{
					Student s = sserv.getStudentbyEmail(email, password);
					s.setPassword(password);
				    sserv.add(s);
					
					return s;
				}
}
