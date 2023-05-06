import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  acno: string = '';
  username: string = '';
  phone: number = 0;
  password: string = '';

  constructor(
    private ds: DataService,
    private r: Router,
    private fb: FormBuilder
  ) {}

  regform = this.fb.group({
    acc: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    pho: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    pass: [
      '',
      [Validators.required, Validators.pattern('[a-zA-Z0-9 *@&]{8,}')],
    ],
  });

  clicked() {
    let acno = this.regform.value.acc;
    let username = this.regform.value.uname;
    let phone = this.regform.value.pho;
    let password = this.regform.value.pass;
    if (this.regform.valid) {
      let res = this.ds.register(acno, username, phone, password);
      res.subscribe((resp:any) => {
        if(resp){
          alert(resp.message)
          this.r.navigateByUrl('')
        }
      },
      (err:any)=>{
        alert(err.error.message)
      }
      );
    }
     else {
      alert('Invalid data!...');
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
