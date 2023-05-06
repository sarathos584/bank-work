import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // acno:string=''
  // amount:number=0
  // password:string=''

  // acno2:string=''
  // amount2:string=''
  // password2:string=''

  cuser: any = '';
  acno = '';

  constructor(
    private ds: DataService,
    private r: Router,
    private fb: FormBuilder
  ) {
    // this.cuser=ds.currentUser
    // this.cuser = JSON.parse(localStorage.getItem('currentUser')||'')
    this.cuser = localStorage.getItem('currentUser');
  }

  dform = this.fb.group({
    daccount: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
    damount: '',
    dpassword: [
      '',
      [Validators.required, Validators.pattern('[0-9A-Za-z!@#$%&]{6,}')],
    ],
  });

  dform2 = this.fb.group({
    daccount2: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
    damount2: '',
    dpassword2: [
      '',
      [Validators.required, Validators.pattern('[0-9A-Za-z!@#$%&]{6,}')],
    ],
  });

  btnClick() {
    console.log(this.dform.value.damount);
    let acco = this.dform.value.daccount;
    let amo = this.dform.value.damount;
    let passw = this.dform.value.dpassword;
    let res = this.ds.deposit(acco, amo, passw);
    res.subscribe(
      (res: any) => {
        alert(res.message);
      },
      (err: any) => {
        alert(err.error.message);
      }
    );
  }

  btnClick2() {
    console.log(this.dform2.value.damount2);
    let accou = this.dform2.value.daccount2;
    let amou = this.dform2.value.damount2;
    let passwo = this.dform2.value.dpassword2;
    let res2 = this.ds.withdraw(accou, amou, passwo);
    res2.subscribe(
      (res: any) => {
        alert(res.message);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
  deleteacc() {
    this.acno = JSON.parse(localStorage.getItem('currentAcno') || '');
    // console.log(this.acno)
  }
  deleteaccount(event: any) {
    console.log(event);
    this.ds.deleteAcc(event).subscribe(res=>{
      if(res){
        localStorage.removeItem('currentAcno')
      localStorage.removeItem('currentUser')
      localStorage.removeItem('token')
      this.r.navigateByUrl('')
      }
    },
    err=>{
      alert(err.error.message)
    })
  }
  canceldelete() {
    this.acno = '';
  }
}
