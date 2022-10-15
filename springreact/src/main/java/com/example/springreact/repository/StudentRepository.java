package com.example.springreact.repository;

import com.example.springreact.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {

    String deleteStudentById(Integer id);
}

