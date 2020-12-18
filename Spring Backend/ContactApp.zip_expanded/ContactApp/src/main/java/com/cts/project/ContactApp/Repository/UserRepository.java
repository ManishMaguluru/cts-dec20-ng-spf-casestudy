package com.cts.project.ContactApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.ContactApp.Entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
