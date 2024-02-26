import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PeopleService } from './People.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './Data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './Login.service';
import { LoginGuardian } from './LoginGuardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    PeopleService,
    LoginService,
    LoginGuardian,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
