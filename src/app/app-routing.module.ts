import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ReservationComponent } from './reservation/reservation.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'add',component:CreateEmployeeComponent},
  {path:'update/:id',component:UpdateEmployeeComponent},
  {path:'details/:id',component:EmployeeDetailsComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
