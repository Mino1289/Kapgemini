import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreFullComponent } from './offre-full/offre-full.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { FormRegisterComponent } from './form-register/form-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offres', component: OffreListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'offre/:id', component: OffreFullComponent },
  { path: 'candidature/:id', component: CandidatureComponent },
  { path: 'connexion', component: FormConnexionComponent },
  { path: 'register', component: FormRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
