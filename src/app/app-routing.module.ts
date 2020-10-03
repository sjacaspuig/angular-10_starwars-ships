import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PilotsComponent } from './pages/pilots/pilots.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';

const routes: Routes = [
  // { path: 'first-component', component: FirstComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'starship-details', component: StarshipDetailsComponent },
  { path: 'pilots', component: PilotsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `login`
  { path: '**', component: LoginComponent }, //  Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
