import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";



let firebaseConfig = {
  apiKey: "AIzaSyDfzwPrEwk6mOFahv5JU_8-T7IXJD78evQ",
  authDomain: "ionic-todolist-e67ad.firebaseapp.com",
  databaseURL: "https://ionic-todolist-e67ad.firebaseio.com",
  projectId: "ionic-todolist-e67ad",
  storageBucket: "ionic-todolist-e67ad.appspot.com",
  messagingSenderId: "860876211489",
  appId: "1:860876211489:web:cdbdac851b4e1e6a4dea60"
};



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule, 
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
