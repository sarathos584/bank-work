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
    this.transact=ds.getTransaction()
    console.log(this.transact)
  }
}