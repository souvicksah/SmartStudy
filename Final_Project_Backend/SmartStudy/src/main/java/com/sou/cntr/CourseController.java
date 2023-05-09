package com.sou.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sou.model.Courses;
import com.sou.model.Student;
import com.sou.model.Teacher;
import com.sou.service.CoursesService;
import com.sou.service.StudentService;
import com.sou.service.TeacherService;

@RestController
@RequestMapping("/course")
public class CourseController {

	@Autowired
	private CoursesService cserv;
	
	@PostMapping(value = {"/courseadd"})
	public Courses courseAddForm(@RequestBody Courses c) {
		cserv.add(c);
		return c;
	}
	@GetMapping(value = {"/coursegetAll"})
	public List<Courses> courseList(){
		return cserv.getAll();
	}
	@GetMapping(value= {"/getCoursebyID"})
	public Courses getcoursebyID(@RequestParam(name = "id") int id){
		return cserv.getById(id);
	}
	@GetMapping(value= {"/deleteCourse"})
	public void deletecoursebyID(@RequestParam(name = "id") int id){
		cserv.removeById(id);
	}
}
