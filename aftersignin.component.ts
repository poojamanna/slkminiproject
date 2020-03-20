import { Component, OnInit } from '@angular/core';
import {   Users } from '../users';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-aftersignin',
  templateUrl: './aftersignin.component.html',
  styleUrls: ['./aftersignin.component.css']
})
export class AftersigninComponent implements OnInit {
user:Users=new Users();
username:string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.username=this.route.snapshot.params['username'];
  }

}
