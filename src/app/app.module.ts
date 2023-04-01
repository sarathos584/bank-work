import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';
// import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { MydirectivesDirective } from './directives/mydirectives.directive'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TransactionComponent,
    DeleteConfirmComponent,
    MydirectivesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }