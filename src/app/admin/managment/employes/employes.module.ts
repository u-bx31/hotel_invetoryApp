import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployesRoutingModule } from './employes-routing.module';
import { AddEmployesComponent } from './add-employes/add-employes.component';
import { ListEmployesComponent } from './list-employes/list-employes.component';
import { EmployesComponent } from './employes.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';


@NgModule({
  declarations: [
    EmployesComponent,
    AddEmployesComponent,
    ListEmployesComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    EmployesRoutingModule
  ]
})
export class EmployesModule { }
