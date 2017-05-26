package com.zensar.dao;

import com.zensar.model.User;

public interface UserDao {

	public void saveUser(User user);
	
	public Boolean checkLogin(User user);
}
