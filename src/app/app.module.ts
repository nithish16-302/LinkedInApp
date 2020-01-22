import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {UrlconfService} from './urlconf.service';
import { ExperienceComponent } from './profile/experience/experience.component';
import { EducationComponent } from './profile/education/education.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { AboutComponent } from './profile/about/about.component';
import {LoginService} from './login/login.service';
import {RegisterService} from './app-register/register.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutModalComponent } from './profile/about/about-modal/about-modal.component';
import {AboutService} from './profile/about/about.service';
import { EducationModalComponent } from './profile/education/education-modal/education-modal.component';
import { ExpComponentComponent } from './profile/experience/exp-component/exp-component.component';
import { SkillsModalComponent } from './profile/skills/skills-modal/skills-modal.component';
import {SkillService} from "./profile/skills/skill.service";
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: AppRegisterComponent},
  { path: 'profile', component: ProfileComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppRegisterComponent,
    ProfileComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AboutComponent,
    AboutModalComponent,
    EducationModalComponent,
    ExpComponentComponent,
    SkillsModalComponent,
  ],
  entryComponents: [AboutModalComponent,
                    EducationModalComponent,
                    ExpComponentComponent,
                    SkillsModalComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [UrlconfService,
    LoginService,
    RegisterService,
    AboutService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
