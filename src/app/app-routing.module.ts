import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  //login
  {
    path:'' ,component:LoginComponent
  },
  //reg
  {
    path:'register' , component:RegisterComponent
  },
  //dash
  {
    path:'dashboard' , component:DashboardComponent
  },
  //transactions component
  {
    path:'transactions',component:TransactionsComponent
  },
  //page not found
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
