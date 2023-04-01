import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // acno:string=''
  // amount:number=0
  // password:string=''

  // acno2:string=''
  // amount2:string=''
  // password2:string=''

  cuser:any=''
  acno=''

  constructor( private ds:DataService,private r:Router,private fb:FormBuilder){
    this.cuser=ds.currentUser
  }
  
dform=this.fb.group({
  daccount:['',[Validators.required,Validators.pattern("[0-9]{4}")]],
  damount:'',
  dpassword:['',[Validators.required,Validators.pattern("[0-9A-Za-z!@#$%&]{6,}")]]

})

dform2=this.fb.group({
  daccount2:['',[Validators.required,Validators.pattern("[0-9]{4}")]],
  damount2:'',
  dpassword2:['',[Validators.required,Validators.pattern("[0-9A-Za-z!@#$%&]{6,}")]]
})

  btnClick(){
    console.log(this.dform.value.damount)
    let acco=this.dform.value.daccount
    let amo=this.dform.value.damount
    let passw=this.dform.value.dpassword
    let res=this.ds.deposit(acco,amo,passw)
    // console.log(this.acno,this.amount,this.password)
    // let res=this.ds.deposit(this.acno,this.amount,this.password)
    if(res==true){
      alert("deposition succesfull!!!..")
    }
    else{
      alert("Deposition Failed!!!...")
    }
  }

  btnClick2(){
    console.log(this.dform2.value.damount2)
    let accou=this.dform2.value.daccount2
    let amou=this.dform2.value.damount2
    let passwo=this.dform2.value.dpassword2
    let res2=this.ds.withdraw(accou,amou,passwo)
    if(res2==true){
      alert("withdraw succesfull!!!..")
    }
    else{
      alert("withdraw Failed!!!...")
    }
  }
  deleteacc(){
    this.acno=JSON.parse(localStorage.getItem("acno")||'')
    console.log(this.acno)
  }
  canceldelete(){
    this.acno=''
  }

}
