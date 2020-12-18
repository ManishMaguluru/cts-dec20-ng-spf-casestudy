package com.cts.project.ContactApp.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.project.ContactApp.Entities.ContactDetails;
import com.cts.project.ContactApp.Repository.ContactsRepository;

@Service
@Transactional
public class ContactsService {
	
	@Autowired
	private ContactsRepository contactsdao;
	
	public List<ContactDetails> fetchallDetails() {
		List<ContactDetails> contacts = contactsdao.findAll();
		return contacts;
	}
	
	public ContactDetails addContact(int profileId,ContactDetails contacts) {
		contacts.setProfile_id(profileId);
		contactsdao.save(contacts);
		return contacts;
	}
	
	public List<ContactDetails> fetchContactsByUser(int profileId) {
		List<ContactDetails> contacts = fetchallDetails();
		List<ContactDetails> contactsByUser = contacts.stream().
				filter(item -> item.getProfile_id() == profileId).
				collect(Collectors.toList());
		return contactsByUser;
		
	}
	
	public void deletecontactById(int profileId, int contactId) {
		contactsdao.deleteById(contactId);
	}
	
	public void deleteContactsbyId(int profileId) {
		
		List<ContactDetails> contacts = fetchallDetails();
		List<ContactDetails> contactsById = contacts.stream().
				filter(item -> item.getProfile_id() == profileId).
				collect(Collectors.toList());
		contactsdao.deleteAll(contactsById);
		
	}

	public ContactDetails EditContact(int profileId, int contactId, ContactDetails changedcontact) {
		
		ContactDetails contact = fetchcontact(profileId, contactId);
		contact.setContactName(changedcontact.getContactName());
		contact.setContactpno(changedcontact.getContactpno());
		return contact;
		
	}
	
	
	public ContactDetails fetchcontact(int profileId, int contactId) {
		Optional<ContactDetails> option = contactsdao.findById(contactId);
		if(option.isPresent()) 
			return option.get();
		else
			return null;
		
	}

}
