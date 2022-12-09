import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EmployeeComponent } from './components/employee/employee.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]

})
export class DashboardModule {
  constructor(){
    console.log("dashborad module")
  }
 }
