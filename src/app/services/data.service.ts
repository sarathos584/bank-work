import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any=''
  currentUser:any=''
  accounts:any={
    1000:{account_no:1000,name:"Arun",phone:954826752,balance:54222,password:"arun123",transaction:[]},
    1001:{account_no:1001,name:"Akhil",phone:954826749,balance:64222,password:"akhil123",transaction:[]},
    1002:{account_no:1002,name:"Raze",phone:954826781,balance:44222,password:"raze123",transaction:[]},
    1003:{account_no:1003,name:"Viper",phone:954826717,balance:1222,password:"viper123",transaction:[]}
  }

  constructor() { 

    this.getDetails()
  }
    


  getDetails(){
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }
    if(localStorage.getItem("accounts")){
      this.accounts=JSON.parse(localStorage.getItem("accounts")||'')
    }
    if(localStorage.getItem("acc")){
      this.currentAcno=JSON.parse(localStorage.getItem("acc")||'')
    }
  }

  saveDetails(){
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    if(this.accounts){
      localStorage.setItem("accounts",JSON.stringify(this.accounts))
    }
  }

  login(acno:any,pswd:any){
    if(acno in this.accounts){
      if(this.accounts[acno].password==pswd){
        this.currentUser=this.accounts[acno].name
        this.saveDetails()
        return true
      }
      else{
        return false     
       }
    }
    else{
      return false
    }
  }

register(acno:any,uname:any,phone:any,pswd:any){
  if(acno in this.accounts){
    alert("Account number already exists")
    return false
  }
  else{
    this.accounts[acno]={account_no:acno,name:uname,phone:phone,balance:0,password:pswd,transaction:[]}
    this.saveDetails()
    console.log(this.accounts)
    return true
  }
}

deposit(acc:any,amnt:any,pass:any){
  if(this.currentAcno=acc){
    if(this.accounts[acc].password==pass){
      this.accounts[acc].balance+=parseInt(amnt)
      let history= {"Type":"CREDIT","Amount":parseInt(amnt)}
      this.accounts[acc].transaction.push(history)
      this.saveDetails()
      alert("balance is : "+this.accounts[acc].balance)
      return true
    }
    else{
      alert("Incorrect password")
      return false
    }
  }
  else{
    alert("Incorrect account number")
    return false
  }
}

withdraw(acc:any,amnt:any,pass:any){
  if(this.currentAcno=acc){
    if(this.accounts[acc].password==pass){
      this.accounts[acc].balance-=parseInt(amnt)
      let history= {"Type":"Debit","Amount":parseInt(amnt)}
      this.accounts[acc].transaction.push(history)
      this.saveDetails()
      alert("balance is : "+this.accounts[acc].balance)
      return true
    }
    else{
      alert("Incorrect password")
      return false
    }
  }
  else{
    alert("Incorrect account number")
    return false
  }
}
getTransaction(){
  if(this.currentAcno){
   return this.accounts[this.currentAcno].transaction
  }
  else{
    alert("Login required")
  }
}

  deleteAcc(acc:any){
    delete this.accounts[acc]
    this.saveDetails()
    return true
  }

}