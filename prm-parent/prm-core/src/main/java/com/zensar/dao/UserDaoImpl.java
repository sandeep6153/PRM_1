package com.zensar.dao;

import org.hibernate.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.zensar.model.User;

@Repository("userDao")
public class UserDaoImpl extends AbstractDao implements UserDao{

	public void saveUser(User user) {
		 persist(user);
		
	}

	public Boolean checkLogin(User user) {
		 Query query = getSession().createSQLQuery("select username from User where username "+ user.getUsername());
		 Integer status = query.executeUpdate();
		 if(status> 0){
			 System.out.println("Successfull find username");
		 }
		 return true;
	}

}
