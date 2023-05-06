import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  transact:any

  constructor(private ds:DataService ,private r:Router){
    ds.getTransaction().subscribe((res:any)=>{
      console.log(res)
      this.transact = res.data
    })

  }
}