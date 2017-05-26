package com.zensar.service;

import java.util.List;

import com.zensar.model.User;



public interface UserService {
	
	/*User findById(long id);
	
	User findByName(String name);
	*/
	void saveUser(User user);
	
/*	void updateUser(User user);
		
	void deleteUserById(long id);

	List<User> findAllUsers(); 
	
	void deleteAllUsers();*/
	
	public Boolean checkLogin(User user);
	public boolean isUserExist(User user);
	
}
