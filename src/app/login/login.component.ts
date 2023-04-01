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

  // username:string=''
  // password:string=''



  // acc:string=''
  // pass:string=''

  // getAcc(e:any){
  //   this.acc=e.target.value
  //   console.log(this.acc)
  // }
  // getPass(e:any){
  //   this.pass=e.target.value
  //   console.log(this.pass)
  // }
  // btnclick(){

  constructor(private r:Router,private ds:DataService,private fb:FormBuilder){} //dependency injection

  logform=this.fb.group({
    acno:['',[Validators.required,Validators.pattern("[0-9]{4}")]],
    pswd:['',[Validators.required,Validators.pattern("[0-9a-zA-Z*&$@!]{4,}")]]
  })
 
 
  btnclick(){

    let acc:any=this.logform.value.acno
    let pass=this.logform.value.pswd
    let res=this.ds.login(acc,pass)
    if(res==true){
      alert("Login Succesfull!...")
      localStorage.setItem("acno",acc)
      this.r.navigateByUrl("dashb")
    }
    else{
      alert("Login Failed!!!Invalid account number or password")
    }

  }
}





    //   let res=this.ds.login(this.acc,this.pass)
  //   if(res==true){
  //     alert("Login Successfull")
  //     localStorage.setItem("acno",this.acc)
  //     this.r.navigateByUrl("dashb")
  //   }
  //   else{
  //     alert("Login Falied!!!Invalid account no or password")
  //   }

  //   }
  // }


//   clicked(us:any,ps:any){
//     console.log(us.value,ps.value)
//   }