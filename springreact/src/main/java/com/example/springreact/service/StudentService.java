package com.example.springreact.service;

import com.example.springreact.model.Student;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


public interface StudentService {
    Student saveStudent(Student student);
    Student findStudentById(Integer id);
    Student deleteStudent(Integer id);
    List<Student> getStudentList();
    String deleteStudentById(Integer id);
    Student updateStudent(Student student,Integer id);



}
