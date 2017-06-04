package com.zensar.controller;



import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.zensar.model.User;
import com.zensar.service.UserService;

@Component
@Path("/")
public class HomeController {
	

	public HomeController() {
		super();
	}
	@Autowired
	UserService userService;
	
	@GET
	@Path("/user")
	@Produces(MediaType.APPLICATION_JSON)
	public User getIndex(){
		User user=new User();
		user.setId(123);
		System.out.println("Hello");
		System.out.println("Hi");
		return user;
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
