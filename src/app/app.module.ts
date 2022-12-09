import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutusComponent } from 'src/app/components/aboutus/aboutus.component';
import { BodyComponent } from 'src/app/components/body/body.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';
import { EmpformComponent } from 'src/app/components/empform/empform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    SignupComponent,
    UserProfileComponent,
    EmpformComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      closeButton: true,

    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private httpClient: HttpClient) {
    console.log("app module")
  }

 }
