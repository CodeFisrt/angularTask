import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent } from './pages/tasks/employee-registration/employee-registration.component';
import { UserRegistrationComponent } from './pages/tasks/user-registration/user-registration.component';

const routes: Routes = [
  {
    path: 'emp-register',
    component: EmployeeRegistrationComponent
  },
  {
    path: 'user-register',
    component: UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
