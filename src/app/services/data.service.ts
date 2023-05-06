import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const  options = {headers:new HttpHeaders()}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentAcno: any = '';
  currentUser: any = '';
  accounts: any = {
    1000: {
      account_no: 1000,
      name: 'Arun',
      phone: 954826752,
      balance: 54222,
      password: 'arun123',
      transaction: [],
    },
    1001: {
      account_no: 1001,
      name: 'Akhil',
      phone: 954826749,
      balance: 64222,
      password: 'akhil123',
      transaction: [],
    },
    1002: {
      account_no: 1002,
      name: 'Raze',
      phone: 954826781,
      balance: 44222,
      password: 'raze123',
      transaction: [],
    },
    1003: {
      account_no: 1003,
      name: 'Viper',
      phone: 954826717,
      balance: 1222,
      password: 'viper123',
      transaction: [],
    },
  };

  constructor(private http: HttpClient) {
    // this.getDetails();
  }

  // getDetails() {
  //   if (localStorage.getItem('currentUser')) {
  //     this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
  //   }
  //   if (localStorage.getItem('accounts')) {
  //     this.accounts = JSON.parse(localStorage.getItem('accounts') || '');
  //   }
  //   if (localStorage.getItem('acc')) {
  //     this.currentAcno = JSON.parse(localStorage.getItem('acc') || '');
  //   }
  // }

  saveDetails() {
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
    if (this.accounts) {
      localStorage.setItem('accounts', JSON.stringify(this.accounts));
    }
  }
  getToken(){
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
      headers=headers.append("x-access-token",token)
      options.headers = headers;
    }
    return options;
  }

  login(acno: any, pswd: any) {
    let data = { acno, pswd };
    return this.http.post('http://localhost:3000/login', data);
  }

  register(acno: any, uname: any, phone: any, pswd: any) {
    let data = {
      acno,
      uname,
      phone,
      pswd,
    };
    return this.http.post('http://localhost:3000/register', data);
  }

  deposit(acc: any, amnt: any, pass: any){
    
      const data = {
        acc,
        amnt,
        pass,
      };
      return this.http.post('http://localhost:3000/deposit', data,this.getToken());
  }

  withdraw(acc: any, amnt: any, pass: any) {

    const data = {
      acc,
      amnt,
      pass,
    };
    return this.http.post('http://localhost:3000/withdraw', data,this.getToken());
  }
  getTransaction() {

const data = {acc : localStorage.getItem('currentAcno')}
return this.http.post('http://localhost:3000/transact', data,this.getToken());
    // if (this.currentAcno) {
    //   return this.accounts[this.currentAcno].transaction;
    // } else {
    //   alert('Login required');
    // }
  }

  deleteAcc(acc: any) {

    return this.http.delete('http://localhost:3000/delacc/'+acc,this.getToken())
    // delete this.accounts[acc];
    // this.saveDetails();
    // return true;
  }
}
