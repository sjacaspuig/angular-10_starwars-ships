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
import { FlashModule } from './components/flash/flash.module';
import { MenuModule } from './components/menu/menu.module';
import { PaginatorModule } from './components/paginator/paginator.module';
import { StarshipModule } from './components/starship/starship.module';
import { StarshipsListModule } from './components/starships-list/starships-list.module';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
    FlashModule,
    MenuModule,
    PaginatorModule,
    StarshipModule,
    StarshipsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
