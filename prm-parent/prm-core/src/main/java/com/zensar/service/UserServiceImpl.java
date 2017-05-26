package com.zensar.service;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.zensar.dao.UserDao;
import com.zensar.model.User;

@Service("userService")
public class UserServiceImpl implements UserService{
	
	
	
	private static List<User> users;
	
	@Autowired
	UserDao userDao;

	public List<User> findAllUsers() {
		return users;
	}
	
	/*public User findById(long id) {
		for(User user : users){
			if(user.getId() == id){
				return user;
			}
		}
		return null;
	}*/
	
	public User findByName(String name) {
		for(User user : users){
			if(user.getUsername().equalsIgnoreCase(name)){
				return user;
			}
		}
		return null;
	}
	
	public void saveUser(User user) {
		userDao.saveUser(user);
	}

	public boolean isUserExist(User user) {
		return findByName(user.getUsername())!=null;
	}

	public Boolean checkLogin(User user) {
		Boolean flag = userDao.checkLogin(user);
		return flag;
	}
	

}
