import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Array<Customer>=[];
  storeMsg?:string;
  deleteMsg?:string;
  updMsg?:string;
  cid?:number;
  age?:number;
  flag:boolean=false;

  customerRef = new FormGroup({
    cid:new FormControl(),
    cname:new FormControl(),
    age:new FormControl()
  });
  constructor(public custSer:CustomerService) { }

  ngOnInit(): void {
    console.log("called...");
    this.getAllCustomers();
  }

  // retrieve customer objs
  storeInfo(){
    let customer = this.customerRef.value;
    //console.log(customer);
    this.custSer.storeCustomerInfo(customer).subscribe(result=>{
      //console.log(result);
      this.storeMsg = result.msg;
      this.getAllCustomers();
    }, error=>console.log(error));
  
    this.customerRef.reset();
  }

  // 
  getAllCustomers(){
    this.custSer.retrieveAllCustomerInfo().subscribe(result=>{
      this.customers=result;
    },error=>console.log(error));
  }

  deleteRec(cid:any){
    //console.log(cid);
    this.custSer.deleteCustomerInfo(cid).subscribe(result=>{
      this.deleteMsg= result.msg;
      this.getAllCustomers();},
      error=>console.log(error));
  }
  
  updateAge(cid:any,age:any){
    this.flag=true;
    this.cid=cid;
    this.age=age;
  }

  nowUpdateAge(){
    //console.log(this.cid+ " "+this.age);
    this.custSer.updateCustomerAge(this.cid,this.age).subscribe(result=>{
      this.updMsg = result.msg;
      this.flag = false;
      this.getAllCustomers();
    },errors=>console.log(errors));
  }

}
