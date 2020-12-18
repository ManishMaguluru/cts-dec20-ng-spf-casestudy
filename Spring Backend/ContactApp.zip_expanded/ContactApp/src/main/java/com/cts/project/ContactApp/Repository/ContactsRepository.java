package com.cts.project.ContactApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.ContactApp.Entities.ContactDetails;

public interface ContactsRepository extends JpaRepository<ContactDetails, Integer>{
	
	

}
