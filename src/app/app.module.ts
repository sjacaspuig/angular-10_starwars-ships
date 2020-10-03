import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';

import { FlashComponent } from './flash/flash.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { StarshipComponent } from './starship/starship.component';
import { PaginatorComponent } from './paginator/paginator.component';

import { PilotPipe } from './shared/pipes/pilot.pipe';
import { FilmPipe } from './shared/pipes/film.pipe';

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
    FilmPipe,
    PaginatorComponent
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
