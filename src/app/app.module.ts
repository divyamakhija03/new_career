import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CollegeComponent } from './college/college.component';
import { DemoComponent } from './demo/demo.component';
import { BlogComponent } from './blog/blog.component';
import { ScienceComponent } from './science/science.component';
import { CommerceComponent } from './commerce/commerce.component';
import { ArtsComponent } from './arts/arts.component';
import { QuizComponent } from './quiz/quiz.component';
import { BackgroundDirective } from './background.directive';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CollegeComponent,
    DemoComponent,
    BlogComponent,
    ScienceComponent,
    CommerceComponent,
    ArtsComponent,
    QuizComponent,
    BackgroundDirective,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
