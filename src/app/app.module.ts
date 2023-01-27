import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './home/about/about.component';
import { RoomsComponent } from './home/rooms/rooms.component';
import { ContactComponent } from './home/contact/contact.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { IndexComponent } from './home/index/index.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { RoomViewComponent } from './home/rooms/room-view/room-view.component';
import { DialogBoxComponent } from './home/rooms/dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './page404/page404.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RoomsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    RoomViewComponent,
    DialogBoxComponent,
    SpinnerComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    NgMaterialModule
  ],
  providers :[CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
