import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersServiceService } from '../users-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
user:Users = new Users();
submitted = false;
 /*title = 'smilesformiles';
  registerForm : FormGroup;*/

  constructor(private userService: UsersServiceService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
   /* this.registerForm =this.formBuilder.group({
  name:['', Validators.required],
  address:['',Validators.required],
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required, Validators.minLength(6)]],
  phone:['',[Validators.required]],
  role:['',[Validators.required]],
confirmpwd:['',Validators.required]
},{
  validator: MustMatch('password','confirmpwd')
});*/
  }
/*get f() {return this.registerForm.controls};*/

newUsers(): void {
  	this.submitted= false;
  	this.user = new Users();
  }
  save() {
  	this.userService.createUser(this.user)
  	.subscribe(data => console.log(data), error => console.log(error));
  	this.user = new Users();
   
    alert("successful")
  	this.gotoList();
  }

  onSubmit() {
  	this.submitted=true;
    console.log("work");
  	this.save();
    console.log("workegdrsf");
  }

  gotoList() {
  	this.router.navigate(['/home']);
  }

}

