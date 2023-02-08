import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyComponent } from './easy/easy.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediumComponent } from './medium/medium.component';
import { HardComponent } from './hard/hard.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    EasyComponent,
    MediumComponent,
    HardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    EasyComponent,
  ]
})

export class TestsModule { }
