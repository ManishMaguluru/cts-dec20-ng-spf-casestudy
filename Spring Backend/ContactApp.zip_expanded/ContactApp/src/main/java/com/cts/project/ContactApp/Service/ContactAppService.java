package com.cts.project.ContactApp.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.project.ContactApp.Entities.User;
import com.cts.project.ContactApp.Repository.UserRepository;

@Service
@Transactional
public class ContactAppService {
	
	@Autowired
	private UserRepository userdao;
	
	public User addUser(User user) {
		User newUser = userdao.save(user); 
		return newUser;
	}
	
	public List<User> getAllUsers(){
		List<User> usersList = userdao.findAll();
		return usersList;
	}
	
	public User Login(int id,String Password) {
		User user = fetchUser(id);
		if(user.getPassword().equals(Password)) {
			return user;
		}
			else {
				return null;
		}
		
	}
	
	public User fetchUser(int id){
		Optional<User> option = userdao.findById(id);
		if(option.isPresent()) 
			return option.get();
		else
			return null;
	}
	
	public User EditUserProfile(int id,User changeduser) {
		User user = fetchUser(id);
		user.setPassword(changeduser.getPassword());
		user.setPhonenumber(changeduser.getPhonenumber());
		return user;
	}
	
	public void deleteProfile(int profileId)
	{
		 userdao.deleteById(profileId);
	}
	
	
	

}
