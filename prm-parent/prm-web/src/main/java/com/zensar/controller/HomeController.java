package com.zensar.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.zensar.model.User;
import com.zensar.service.UserService;

@RestController
public class HomeController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value= "/" ,method = RequestMethod.GET)
	public String getIndex(){
		System.out.println("Hello");
		System.out.println("Hi");
		return "user";
	}
	
	 @RequestMapping(value = "/register", method = RequestMethod.POST)
	    public String createUser(@RequestBody User user) {
	        System.out.println("Creating User " + user.getUsername());
	        String status="";
	        if (userService.isUserExist(user)) {
	            System.out.println("A User with name " + user.getUsername() + " already exist");
	        }else{
	        	userService.saveUser(user);
	        	status = "User Successfully register";
	        }
	        return status;
	    }
	 @RequestMapping(value = "/checkLogin", method = RequestMethod.POST)
	    public String checkLogin(@RequestBody User user) {
	        System.out.println(" Inside check Login");
	        String status="";
	        userService.checkLogin(user);
	        status = "User Successfully register";
	        return status;
	    }
	 
}
