import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';
import { LoginComponent } from './authentication/login/login.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { RegisterComponent } from './authentication/register/register.component';
import { BlogComponent } from './blog/blog.component';
import { CollegeComponent } from './college/college.component';
import { CommerceComponent } from './commerce/commerce.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';

import { QuizComponent } from './quiz/quiz.component';
import { ScienceComponent } from './science/science.component';

import { EasyComponent } from './tests/easy/easy.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'college',component:CollegeComponent},
  {path:'blog',component:BlogComponent},
  {path:'science',component:ScienceComponent},
  {path:'commerce',component:CommerceComponent},
  {path:'arts',component:ArtsComponent},
  {path:'demo',component:DemoComponent},
  {path:'quiz',component:QuizComponent},
  {path:'easy',component:EasyComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}, 
  {path:'profile',component:ProfileComponent},
  {path:'',redirectTo:"home",pathMatch:"full"},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonModule,],
  exports: [RouterModule],
  
  
})
export class AppRoutingModule { }
