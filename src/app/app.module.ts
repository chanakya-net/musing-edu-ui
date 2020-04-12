import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { MaterialModules } from './material.module';
import * as fromApplicationStore from './AppStore/appstore.global';
import * as FromAuthEffect from './auth/Store/auth.store.effects';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MainAreaComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    MaterialModules,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApplicationStore.GlobalReducer),
    EffectsModule.forRoot([FromAuthEffect.AuthenticationEffects]),
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
