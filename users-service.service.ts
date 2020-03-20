import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ProductInformation} from "./product-information";
import{catchError} from 'rxjs/operators';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
	private baseUrl = 'http://localhost:8080/users'
 private baseUrl1 = 'http://localhost:8080/products'
 private baseUrl2 = 'http://localhost:8080/details'


  constructor(private http: HttpClient,private userService: UsersServiceService) { }
 

getproductid(id:string,name:string,desc:string,price:string,img:string):Observable<any> 
{
  return this.http.get(`${this.baseUrl2}/`+id+'/'+name+'/'+desc+'/'+price+'/'+img);
}

createUser(user: Object): Observable<Object> {
  		return this.http.post(`${this.baseUrl}`,user);
}

  loginValidation(name,password){
  		return this.http.get('http://localhost:8080/users/'+name+'/'+password);
    }
   
     getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
}
  }
