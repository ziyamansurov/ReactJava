package com.example.springreact.service.impl;

import com.example.springreact.model.Student;
import com.example.springreact.repository.StudentRepository;
import com.example.springreact.service.StudentService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    @Autowired
    public StudentServiceImpl(StudentRepository studentRepository){
        this.studentRepository=studentRepository;
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Student findStudentById(Integer id) {
        return null;
    }

    @Override
    public Student deleteStudent(Integer id) {
        return null;
    }

    @Override
    public List<Student> getStudentList() {
        return studentRepository.findAll();
    }

    @Override
    public String deleteStudentById(Integer id) {
        Optional<Student> student=studentRepository.findById(id);
        if(student.isPresent())
        {
            studentRepository.deleteById(id);
            return "Student deleted";

        }
        else return null;


    }

    public Student updateStudent(Student student,Integer id) {
        Optional<Student> editStudent=studentRepository.findById(id);
        if(editStudent.isPresent()){
            editStudent.get().setName(student.getName());
            editStudent.get().setSurname(student.getSurname());
            return studentRepository.save(editStudent.get());



        }
        return null;

    }
}
