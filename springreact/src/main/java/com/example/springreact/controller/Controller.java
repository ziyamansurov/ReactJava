package com.example.springreact.controller;


import com.example.springreact.model.Student;
import com.example.springreact.service.impl.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
    private StudentServiceImpl studentService;

    @Autowired
    public Controller(StudentServiceImpl studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/save")
    public Student saveStudent(@RequestBody Student student){
        return studentService.saveStudent(student);
    }
    @GetMapping("/list")
    public List<Student> getStudentList(){

        return studentService.getStudentList();

    }
    @PostMapping("/delete/{id}")
    public String deleteStudentById(@PathVariable("id") Integer id){

        return studentService.deleteStudentById(id);
    }
    @PostMapping("/update/{id}")
    public Student editStudent(@PathVariable("id") Integer id,@RequestBody Student student){
      //  System.out.println("Salam");

        return studentService.updateStudent(student,id);
    }

}
