package com.sou.cntr;



import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sou.model.ProjectAdmin;
import com.sou.model.Student;
import com.sou.model.Teacher;
import com.sou.model.User;
import com.sou.service.ProjectAdminService;
import com.sou.service.StudentService;
import com.sou.service.TeacherService;
import com.sou.service.UserJWTService;

@Controller
@CrossOrigin(value= {"http://localhost:3000"})
public class AuthenticationController {
	
	@Autowired
	private StudentService sserv;
	@Autowired
	private TeacherService tserv;
	@Autowired
	private ProjectAdminService pserv;
	@Autowired
	private UserJWTService userv;
	
	@PostMapping(value = {"/student/login"})
	public ResponseEntity<?> studentCheck(@RequestBody User u) {
		
		List<Student> lst=sserv.getAll();
		System.out.println(u);
		System.out.println(lst);
		for(Student s:lst)
		{
			System.out.println(s.getEmail()+" "+s.getPassword()+" "+u.getEmail()+" "+u.getPassword());
			if(s.getEmail().equals(u.getEmail()) && s.getPassword().equals(u.getPassword()))
			{
//				HttpSession session = request.getSession();
//				session.setAttribute("id",s.getStudentID());
//				
//				System.out.println(s.getStudentID()+" "+session.getAttribute("id"));
//				session.setAttribute("password",s.getPassword());
				return new ResponseEntity<>(s, HttpStatus.OK);
			}
			
		}
		//System.out.println(new ResponseEntity<>(null, HttpStatus.BAD_REQUEST));
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
	@PostMapping(value = {"/teacher/login"})
	public ResponseEntity<?> teacherCheck(@RequestBody User u,HttpSession session) {
		
		List<Teacher> lst=tserv.getAll();
		System.out.println(u);
		for(Teacher s:lst)
		{
			if(s.getEmail().compareTo(u.getEmail())==0 && s.getPassword().compareTo(u.getPassword())==0)
			{
				session.setAttribute("id", Integer.toString(s.getTeacherID()));
				session.setAttribute("password",s.getPassword());
				return new ResponseEntity<>(s, HttpStatus.OK);
			}
			
		}
		//System.out.println(new ResponseEntity<>(null, HttpStatus.BAD_REQUEST));
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
	@RequestMapping(value = {"/student/logout"},method = RequestMethod.GET)
    public ResponseEntity<?> logout(HttpSession session) {
		System.out.println("asdf");
        session.removeAttribute("id");
        session.removeAttribute("password");
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
	@RequestMapping(value = {"/teacher/logout"},method = RequestMethod.GET)
	public ResponseEntity<?> teacherLogout(HttpSession session) {
		System.out.println("asdf");
		session.removeAttribute("id");
		session.removeAttribute("password");
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
	@PostMapping(value = {"/admin/login"})
	public ResponseEntity<?> adminCheck(@RequestBody User u,HttpSession session) {
		
		List<ProjectAdmin> lst=pserv.getAll();
		System.out.println(u);
		for(ProjectAdmin s:lst)
		{
			if(s.getEmail().equals(u.getEmail()) && s.getPassword().equals(u.getPassword()))
			{
				session.setAttribute("id", Integer.toString(s.getAdminId()));
				session.setAttribute("password",s.getPassword());
				return new ResponseEntity<>(s, HttpStatus.OK);
			}
			
		}
		//System.out.println(new ResponseEntity<>(null, HttpStatus.BAD_REQUEST));
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
	
	////tanveer change /admin/logout
	@RequestMapping(value = {"/admin/logout"},method = RequestMethod.GET)
	public ResponseEntity<?> adminLogout(HttpSession session) {
		System.out.println("asdf");
		session.removeAttribute("id");
		session.removeAttribute("password");
		return new ResponseEntity<>(null, HttpStatus.OK);
	}
}
