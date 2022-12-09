import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from 'src/app/components/aboutus/aboutus.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component : LoginComponent},
  // {path:'home', component : HomeComponent},
  // {path:'aboutus', component : AboutusComponent},
  // {path:'contact', component : ContactComponent},
  {path:'signup', component : SignupComponent},
  {path:'profile', component : UserProfileComponent},
  { 
    path: 'dashboard', 
    loadChildren: () => import(`../dashboad_module/dashboard.module`).then(
      module => module.DashboardModule
    )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
