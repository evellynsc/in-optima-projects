import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';


import { MdlModule } from 'angular2-mdl';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { MyDatePickerModule } from 'mydatepicker/dist/my-date-picker.module';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { BudgetModule } from './budget/budget.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UtilComponent } from './util.component';

import { UtilService } from './util.service';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA9Zdemxf3H1r1WSsvgH1-OJGqPa6eXBC8',
  authDomain: 'oneclickbudget-ccb8b.firebaseapp.com',
  databaseURL: 'https://oneclickbudget-ccb8b.firebaseio.com/',
  storageBucket: 'gs://oneclickbudget-ccb8b.appspot.com',
  messagingSenderId: "253282632904"
};

// Anonymous
// const firebaseAuthConfig = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// }

@NgModule({
  imports:      [
    AppRoutingModule,
    BrowserModule,
    BudgetModule,
    MdlModule,
    MdlSelectModule,
    MyDatePickerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    UtilComponent, //TODO: remove me!
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    UtilService
  ]
})
export class AppModule { }
