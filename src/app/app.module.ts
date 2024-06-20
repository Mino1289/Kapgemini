import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreComponent } from './offre/offre.component';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreFullComponent } from './offre-full/offre-full.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { FormsModule } from '@angular/forms';
import { FormRegisterComponent } from './form-register/form-register.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { ProfilComponent } from './profil/profil.component';
import { CandidatureFullComponent } from './candidature-full/candidature-full.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { FormRegisterRctComponent } from './form-register-rct/form-register-rct.component';
import { FormAjouterOffreComponent } from './form-ajouter-offre/form-ajouter-offre.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OffreComponent,
    OffreListComponent,
    OffreFullComponent,
    HomeComponent,
    UserComponent,
    UserListComponent,
    CandidatureComponent,
    FormConnexionComponent,
    FormRegisterComponent,
    DeconnexionComponent,
    ProfilComponent,
    CandidatureFullComponent,
    EntrepriseComponent,
    EntreprisesComponent,
    FormRegisterRctComponent,
    FormAjouterOffreComponent,
    FooterComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
