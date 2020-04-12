import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { MaterialModules } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import * as fromApplicationStore from './AppStore/appstore.global';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MainAreaComponent
  ],
  imports: [
    HttpClientModule,
    MaterialModules,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApplicationStore.GlobalReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(
      {
        name: 'musingDaycare',
        maxAge: 25,
        logOnly: environment.production
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
