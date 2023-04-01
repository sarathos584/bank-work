import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  acno:string=''
  username:string=''
  phone:number=0
  password:string=''

  constructor(private ds:DataService,private r:Router,private fb:FormBuilder) {}

  regform=this.fb.group({
    acc:['',[Validators.required,Validators.pattern("[0-9]{4}")]],
    uname:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]+")]],
    pho:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    pass:['',[Validators.required,Validators.pattern("[a-zA-Z0-9 *@&]{8,}")]]

  })


  clicked(){

    let acno=this.regform.value.acc
    let username=this.regform.value.uname
    let phone=this.regform.value.pho
    let password=this.regform.value.pass
    let res=this.ds.register(acno,username,phone,password)
    if(this.regform.valid){
    if(res==true){
      alert("registration succesfull!!..")
      this.r.navigateByUrl("")
    }
    else{
      alert("registration failed!!!...")
    }
  }
  else{
    if(this.regform.get("acc")?.errors){
      alert("Invalid account number")
    }
    if(this.regform.get("uname")?.errors){
      alert("Invalid username")
    }
    if(this.regform.get("pho")?.errors){
      alert("invalid phone number")
    }
    if(this.regform.get("pass")?.errors){
      alert("Invalid password")
    }
    alert("Invalid data!...")
  }
  }








    //   console.log(this.acno,this.username,this.phone,this.password)
  //   let res=this.ds.register(this.acno,this.username,this.phone,this.password)
  //   if(res==true){
  //     alert("Registration Successfull !!...")
  //     this.r.navigateByUrl("")
  //   }
  //   else{
  //     alert("Registration Failed xxxxx")
  //   }
  // }
}