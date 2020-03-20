import { Component, OnInit , Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProductInformation} from "./../product-information";
import { UsersServiceService } from '../users-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id: string;
name: string;
desc:string;
price:string;
img:string;
products:ProductInformation;

  constructor(private route: ActivatedRoute, private router: Router,
  	private userService: UsersServiceService) { }

  ngOnInit() {
  	this.products = new ProductInformation();

  	this.id = this.route.snapshot.paramMap.get('product_id');
    this.name = this.route.snapshot.paramMap.get('product_name');  
    this.desc = this.route.snapshot.paramMap.get('product_description');    
    this.price = this.route.snapshot.paramMap.get('product_price');    
    this.img = this.route.snapshot.paramMap.get('product_icon');    
   
  	this.userService.getproductid(this.id,this.name,this.desc,this.price,this.img)
  	.subscribe(data=> { 
    
          this.name=this.products.product_name;
          this.desc=this.products.product_description;
          this.price=this.products.product_price;
          this.img=this.products.product_icon;
    
   
    console.log(data)

  })
     

    
  }

    list() {

  	this.router.navigate(['products']);
  }
buy(id:number) {

    this.router.navigate(['buy']);
  }
  cart(id:number) {

    this.router.navigate(['cart']);
  }


}
