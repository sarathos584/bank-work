import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name:string="Federal Bank"
  phone:number=96545403665

  hint:string="Enter your credentials"
  constructor(private r:Router,private ds:DataService,private fb:FormBuilder){} //dependency injection

  logform=this.fb.group({
    acno:['',[Validators.required,Validators.pattern("[0-9]{4}")]],
    pswd:['',[Validators.required,Validators.pattern("[0-9a-zA-Z*&$@!]{4,}")]]
  })
 
 
  btnclick(){

    let acc:any=this.logform.value.acno
    let pass=this.logform.value.pswd
    let res=this.ds.login(acc,pass)
    res.subscribe((resp:any)=>{
      if(resp){
        localStorage.setItem('currentUser',resp.currentUser)
        localStorage.setItem('currentAcno',resp.currentAcno)
        localStorage.setItem('token',resp.token)
        alert(resp.message);
        this.r.navigateByUrl("dashb")
      }

    },
    (err)=>{
      alert(err.error.message)
    }
    )


  //   if(res==true){
  //     alert("Login Succesfull!...")
  //     localStorage.setItem("acno",acc)    
  //   }
  //   else{
  //     alert("Login Failed!!!Invalid account number or password")
  //   }

  // }
}
  }