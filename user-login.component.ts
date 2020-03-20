import { Component, OnInit } from '@angular/core';
import {   Users } from '../users';
import { UsersServiceService } from '../users-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
user:Users = new Users();
model:any;
name:string;
password:string;
getdata:boolean;
  constructor(private userService: UsersServiceService, private router: Router,
  	private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
Loginuser()
{
  var name=this.user.name;
    var username=this.user.name;

    var password=this.user.password;
    console.log(name);
    console.log(password);
    this.userService.loginValidation(name,password)
    .subscribe((res:boolean)=>{
     console.log("Hello---"+res);
  
    this.getdata=res;
    console.log("flag "+this.getdata);
          //this.navigates(username);

          });
    if(this.getdata==true)
    {
      
      //this.router.navigate(['/home'])
    this.navigates(username);
    }
}
/*Logout()
{
        this.router.navigate(['/home'])

}*/
navigates(username:string)
{
  this.router.navigate(['/aftersignin',username]);
}

}

