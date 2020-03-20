package com.example.minilogin.DAO;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;


import com.example.minilogin.model.Users;


@RestController
public interface UserDAO {
	public List<Users> viewAllUser();
	public void updateUser(Users user);
	public Users createUser(Users user);
	public int loginValidation(String name,String password);

}
