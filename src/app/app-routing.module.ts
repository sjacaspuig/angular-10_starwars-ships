import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShipsComponent } from './ships/ships.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';

const routes: Routes = [
  // { path: 'first-component', component: FirstComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'starship-details', component: StarshipDetailsComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `login`
  { path: '**', component: LoginComponent }, //  Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
