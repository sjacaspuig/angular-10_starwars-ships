import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlashComponent } from './flash/flash.component';
import { ShipsComponent } from './ships/ships.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { StarshipComponent } from './starship/starship.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { PilotPipe } from './pipes/pilot.pipe';
import { FilmPipe } from './pipes/film.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FlashComponent,
    ShipsComponent,
    StarshipsListComponent,
    StarshipComponent,
    StarshipDetailsComponent,
    PilotPipe,
    FilmPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
