package com.cts.project.ContactApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.ContactApp.Entities.ContactDetails;
import com.cts.project.ContactApp.Entities.User;
import com.cts.project.ContactApp.Service.ContactAppService;
import com.cts.project.ContactApp.Service.ContactsService;

@RestController
@RequestMapping("user")
@CrossOrigin(origins="*")
public class ContactAppController {
	
	@Autowired
	private ContactAppService service;
	
	@Autowired
	private ContactsService contactsService;
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> addCustomer(@RequestBody User user)
	{
		ResponseEntity<Object> response = null;
		try {
			User addUser = service.addUser(user);
			response = ResponseEntity.status(200).body(addUser);
			System.out.println("User added");
		} catch (Exception e) {
			System.out.println("USer added failed");
		}
		return response;
	}
	@PostMapping(value="/login/{id}/{password}",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> Login(@PathVariable("id") int id,@PathVariable("password") String Password)
	{
		ResponseEntity<Object> response = null;
		try {
			User addUser = service.Login(id,Password);
			response = ResponseEntity.status(200).body(addUser);
			System.out.println("Login");
		} catch (Exception e) {
			System.out.println("Login failed");
		}
		return response;
	}
	
	@PutMapping(value = "{id}",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> EditUser(@RequestBody User changeduser,@PathVariable("id")int profileId)
	{
		ResponseEntity<Object> response = null;
		try {
			User addUser = service.EditUserProfile(profileId, changeduser);
			response = ResponseEntity.status(200).body(addUser);
			System.out.println("User edit added");
		} catch (Exception e) {
			System.out.println("USer edit failed");
		}
		return response;
	}
	
	@GetMapping
	public ResponseEntity<Object> fetchAllCustomers()
	{
		ResponseEntity<Object> response = null;
		try {
			List<User> user = service.getAllUsers();
			response = ResponseEntity.status(200).body(user);
		} catch (Exception e) {
			System.out.println("Failed");
		}
		return response;
	}
	
	@GetMapping(value="/contacts")
	public ResponseEntity<Object> fetchAllContacts()
	{
		ResponseEntity<Object> response = null;
		try {
			List<ContactDetails> contacts = contactsService.fetchallDetails();
			response = ResponseEntity.status(200).body(contacts);
		} catch (Exception e) {
			System.out.println("Failed");
		}
		return response;
	}
	
	@PostMapping(value="/contacts/{id}",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> addContact(@RequestBody ContactDetails contact,@PathVariable("id") int profileId)
	{
		ResponseEntity<Object> response = null;
		try {
			ContactDetails addContact = contactsService.addContact(profileId,contact);
			response = ResponseEntity.status(200).body(addContact);
			System.out.println("Contact added");
		} catch (Exception e) {
			System.out.println("Contact added failed");
		}
		return response;
	}
	
	@GetMapping(value="/contacts/{id}")
	public ResponseEntity<Object> fetchContactsByUser(@PathVariable("id") int profileId)
	{
		ResponseEntity<Object> response = null;
		try {
			List<ContactDetails> contacts = contactsService.fetchContactsByUser(profileId);
			System.out.println("Entered"+profileId);
			response = ResponseEntity.status(200).body(contacts);
		} catch (Exception e) {
			System.out.println("Failed");
		}
		return response;
	}
	
	@PutMapping(value = "/contacts/{profileid}/{contactid}",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> EditContact(@RequestBody ContactDetails changedcontact,@PathVariable("profileid") int profileId,@PathVariable("contactid") int contactId)
	{
		ResponseEntity<Object> response = null;
		try {
			ContactDetails editedcontact= contactsService.EditContact(profileId,contactId, changedcontact);
			response = ResponseEntity.status(200).body(editedcontact);
			System.out.println("User edit added");
		} catch (Exception e) {
			System.out.println("USer edit failed");
		}
		return response;
	}
	
	
	
	@DeleteMapping(value = "{id}")
	public void deleteUserProfile(@PathVariable("id") int profileId){
		contactsService.deleteContactsbyId(profileId);
		service.deleteProfile(profileId);
	}
	
	@DeleteMapping(value = "/contacts/{profileid}/{contactid}")
	public void deleteContact(@PathVariable("profileid") int profileid,@PathVariable("contactid") int contactid) {
		contactsService.deletecontactById(profileid,contactid);
	}

}
