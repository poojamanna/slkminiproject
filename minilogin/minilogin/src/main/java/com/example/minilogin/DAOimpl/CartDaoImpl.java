package com.example.minilogin.DAOimpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RestController;

import com.example.minilogin.DAO.CartDAO;
import com.example.minilogin.model.Cart;
import com.example.minilogin.model.ProductInfo;
import com.example.minilogin.model.Users;
import com.example.minilogin.util.DButil;

@RestController
public class CartDaoImpl implements CartDAO {
	Connection connection;
	static List<Users> list1 = new ArrayList();

	public CartDaoImpl() {
		connection = DButil.getConnection();
		System.out.println("connection" + connection);
	}

	public List<Users> viewAllName() {
		// List<Customer> customer = new ArrayList<Customer>();
		System.out.println("Inside viewAll customer");

		try {
			list1.clear();

			System.out.println("Inside try");
			PreparedStatement stmt = connection.prepareStatement("select id,name from users");
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				Users user = new Users();
				System.out.println("Inside while");
				user.setId(rs.getLong("id"));
				user.setName(rs.getString("name"));
				System.out.println("Inside while-2");
				list1.add(user);
				System.out.println(list1);
			}
		} catch (Exception e) {
		}
		return list1;
	}

	@Override
	public int idvalidation(String name) {
		int flag = 0;
		Cart ca = new Cart();
		for (Users c : list1) {
			try {
				System.out.println("Customer data----" + c);
				PreparedStatement pstmt = connection.prepareStatement("delete  from  cart");
				pstmt.executeUpdate();

				if (c.getName().equals(name)) {
					PreparedStatement pst = connection.prepareStatement(
							"Insert into cart(user_id) select id from users where name='" + name + "'");
					System.out.println("tfdjk");
					Long id = ca.getId();
					System.out.println(id);
					System.out.println("ass");
					pst.executeUpdate();
					System.out.println("apple");
					flag = 1;
				}
			} catch (Exception e) {
			}
		}
		System.out.println("flag" + flag);
		return flag;
	}


  public List<Users> orders() 
  { // List<Customer> customer = new ArrayList<Customer>(); 
	System.out.println("Inside viewAll customer");
  
  try {
	  list1.clear();
	  Long temp; 
	  System.out.println("Inside try");
  PreparedStatement stmt =connection.prepareStatement("select max(order_id) from order_main");
 ResultSet rs = stmt.executeQuery();
 rs.next();
 temp=rs.getLong(1);
 temp++;
 
 PreparedStatement stmt1 = connection.prepareStatement("select * from users");
	ResultSet rs1 = stmt.executeQuery();
	while (rs1.next()) {
		Users user=new Users();
		System.out.println("Inside while");
	String address=rs.getString("address");
	String email=rs.getString("email");
	String buyer_name=rs.getString("name");
	String buyer_phone=rs.getString("phone");
	System.out.println(email);

	}
/* PreparedStatement stmt1 =connection.prepareStatement("insert into order_main(order_id,buyer_address,buyer_email,buyer_name,buyer_phone,create_time,order_amount,order_status,update_time) select id from users where name='\" + name + \"'");
 stmt1.executeUpdate(); PreparedStatement stmt2 =
 connection.prepareStatement("insert into product_order(...) values(temp, )");
 stmt2.executeUpdate();
 
 */
 }catch (Exception e) { } return list1; 
 
  }
 
 } 

