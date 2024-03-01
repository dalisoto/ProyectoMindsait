import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilesComponent } from './componentes/perfiles/perfiles.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbasicComponent } from './componentes/navbasic/navbasic.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LogadmComponent } from './componentes/logadm/logadm.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilesComponent,
    HomeComponent,
    LoginComponent,
    NavbasicComponent,
    RegistroComponent,
    LogadmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
