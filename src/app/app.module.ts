import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModuleModule } from './material-module/material-module.module'

import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFireModule } from 'angularfire2'; 
import { environment } from './../environments/environment'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { AngularFirestoreModule } from 'angularfire2/firestore'; 

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModuleModule, 
    FormsModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule, 
    AngularFirestoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
