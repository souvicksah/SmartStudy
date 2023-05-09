package com.sou.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sou.model.Courses;

@Repository
public interface CoursesDao extends JpaRepository<Courses, Integer>{

//	@Query("SELECT * FROM Courses c WHERE c.teacherid = ?1")
	@Query(value="SELECT * FROM Courses WHERE teacher_teacherid= :teacher_id", nativeQuery=true)
	List<Courses> getCourseByID(@Param(value="teacher_id") int teacher_id);
	@Query(value="Select * from Courses where course_id in (SELECT course_course_id from Orders WHERE student_studentid=:student_id)",nativeQuery=true)
	List<Courses> getCoursesByStudentId(@Param(value="student_id") int student_id);
}
