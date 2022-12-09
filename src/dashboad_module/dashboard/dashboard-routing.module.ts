import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "../components/employee/employee.component";
import { DashboardComponent } from "../dashboard.component";


const routes: Routes = [
  {path: '',component: DashboardComponent},
  {path: 'dashboard', component : DashboardComponent,
   children: [
    {path: 'employees', component: EmployeeComponent}
  ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule {
    constructor(){ }

   }
  