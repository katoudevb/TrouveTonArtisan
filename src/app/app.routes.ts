import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { ConfidentialiteComponent } from './pages/confidentialite/confidentialite.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { ArtisanDetailComponent } from './components/artisan-detail/artisan-detail.component';
import { BatimentComponent } from './components/batiment/batiment.component';
import { ServicesComponent } from './components/services/services.component';
import { FabricationComponent } from './components/fabrication/fabrication.component';
import { AlimentaireComponent } from './components/alimentaire/alimentaire.component';
import { RechercheComponent } from './components/recherche/recherche.component'


export const routes: Routes = [
    // Route racine ("/") : chargement du composant de la page d'accueil
    { path: '', component: HomeComponent }, 

    // Route vers le moteur de recherche
    { path: 'recherche', component: RechercheComponent },

    // Routes vers les catégories métiers (affichage par type d’activité)
    { path: 'batiment', component: BatimentComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'fabrication', component: FabricationComponent },
    { path: 'alimentaire', component: AlimentaireComponent },
    // Routes vers le composant de détail d’un artisan
    { path: 'artisan', component: ArtisanDetailComponent },         // route statique
    { path: 'artisan/:id', component: ArtisanDetailComponent },     // route dynamique avec paramètre `id`

    // Pages statiques légales
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'cgu', component: CguComponent },
    { path: 'confidentialite', component: ConfidentialiteComponent },
    { path: 'cookies', component: CookiesComponent },

    // Wildcard : route de secours pour les chemins inconnus (404)
    { path: '**', component: NotFoundComponent }
];