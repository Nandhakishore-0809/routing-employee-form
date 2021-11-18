import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'homePage',
    component: HomePageComponent,
  },
  { path: 'employeeForm', component: EmployeeFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [HomePageComponent, EmployeeFormComponent];
