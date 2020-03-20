package com.example.minilogin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.minilogin.DAO.CartDAO;
import com.example.minilogin.DAO.UserDAO;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CartController {
	@Autowired
	private CartDAO cartDAO;
	@GetMapping("/names")
	public List getNames() {	
	return cartDAO.viewAllName();
}
	@GetMapping("/names/{name}")
	public ResponseEntity getNames(@PathVariable("name") String name) {	
		orders();
		int flag=cartDAO.idvalidation(name);	
		/* System.out.println(flag); */
		System.out.println("qw");
		if (flag == 0) {
			return new ResponseEntity("No Customer found for ID " + name, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(flag, HttpStatus.OK);
	}
}
