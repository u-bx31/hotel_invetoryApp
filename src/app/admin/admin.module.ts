import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RoomsComponent } from './managment/rooms/rooms.component';
import { EmployesComponent } from './managment/employes/employes.component';
import { SideBarComponent } from './managment/side-bar/side-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    LoginComponent,
    RoomsComponent,
    EmployesComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class AdminModule { }
