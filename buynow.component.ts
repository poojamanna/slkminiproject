import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersServiceService } from '../users-service.service';
import {   Users } from '../users';



@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {
name:string;
password:string;
user:Users = new Users();
  constructor(private route: ActivatedRoute, private router: Router,
  	private userService: UsersServiceService) { }

  ngOnInit() {
  }

}
  