import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcarts',
  templateUrl: './addcarts.component.html',
  styleUrls: ['./addcarts.component.css']
})
export class AddcartsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
/*list1(){

  	this.router.navigate(['products']);
  }
*/