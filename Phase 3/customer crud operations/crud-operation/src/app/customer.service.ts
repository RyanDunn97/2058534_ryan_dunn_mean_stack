import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // DI for HttpClient
  constructor(public http:HttpClient) { }

  // post method takes two parameters
  // 1st parameter url, 2nd param data in json
  storeCustomerInfo(customer:Customer):Observable<any>{
    return this.http.post<any>("http://localhost:9090/storeCustomerInfo", customer);
  }

  // call get method can convert all json data into customer array obj
  retrieveAllCustomerInfo():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:9090/allCustomerDetails");
  }

  // call delete method
  deleteCustomerInfo(cid:any):Observable<any>{
    return this.http.delete<any>("http://localhost:9090/deleteCustomerInfo/"+cid);
  }

  // 1st param url, 2nd param data in json
  updateCustomerAge(cid:any,age:any):Observable<any>{
    return this.http.put<any>("http://localhost:9090/updateCustomerAge",{cid:cid,age:age});
  }

}
