import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

// Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';
import { PilotsComponent } from './pages/pilots/pilots.component';
import { LogoutComponent } from './pages/logout/logout.component';

// Components
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { FlashComponent } from './components/flash/flash.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MenuComponent } from './components/menu/menu.component';

// Pipes
import { PilotPipe } from './shared/pipes/pilot.pipe';
import { FilmPipe } from './shared/pipes/film.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShipsComponent,
    StarshipDetailsComponent,
    PilotPipe,
    FilmPipe,
    PilotsComponent,
    LogoutComponent,
    FlashComponent,
    StarshipsListComponent,
    StarshipComponent,
    PaginatorComponent,
    MenuComponent
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
