import { Component, OnInit } from '@angular/core';              // Ajout de OnInit pour cycle de vie
import { Router, ActivatedRoute } from '@angular/router';
import { Artisan } from '../../models/artisan.model';              // Import du modèle artisan
import { ArtisansService } from '../../../services/artisan.service'; // Correction du chemin d'import du service
import { CommonModule } from '@angular/common'; // Import du module commun pour les directives de base
import { FormsModule } from '@angular/forms'; // Import des formulaires pour ngModel

@Component({
  selector: 'app-recherche',
  imports: [CommonModule, FormsModule, ], // Importation du module commun pour les directives de base
  standalone: true,        // Ajout de standalone: true si c'est un composant
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss'],
  providers: [ArtisansService] // Ajout du provider pour l'injection du service
})
export class RechercheComponent implements OnInit {

  artisans: Artisan[] = [];            // Tableau complet des artisans récupérés
  searchQuery: string = '';            // Requête de recherche extraite des query params
  filteredArtisans: Artisan[] = [];   // Résultats filtrés (ici identiques à artisans)
  selectedCategory: string = ''; // Catégorie sélectionnée pour le filtrage (non utilisée dans ce composant, mais peut être utile pour l'avenir)

  // Injection des services nécessaires via le constructeur
  constructor(
    private route: ActivatedRoute,
    private artisansService: ArtisansService,  // Service pour récupérer les artisans
    private router: Router
  ) { }

  // ngOnInit : au démarrage du composant, on s'abonne aux paramètres de requête de l'URL.
// Dès qu'un paramètre 'query' est détecté, on le récupère ou on initialise à une chaîne vide,
// puis on lance la recherche avec cette valeur.
ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.searchQuery = params['query'] || '';
    this.onSearch(this.searchQuery);
  });
}

// Méthode de recherche qui met à jour la variable searchQuery avec la requête.
// Si la requête est non vide, on appelle le service artisans pour récupérer les données.
// On transforme ensuite les données reçues en s'assurant que la note est bien un nombre
// et que le site web existe, sinon on met une chaîne vide.
// Sinon, on vide la liste filtrée.
onSearch(query: string) {
  this.searchQuery = query;
  if (query) {
    this.artisansService.searchArtisans(query).subscribe((data: Artisan[]) => {
      console.log('Résultats trouvés :', data); // Debug
      this.filteredArtisans = data.map(item => ({
        ...item,
        note: Number(item.note),
        website: item.website !== undefined ? item.website : ''
      }));
    });
  } else {
    this.filteredArtisans = [];
  }
}

// Navigation vers la page détail d’un artisan via son identifiant.
viewsDetails(id: string): void {
  this.router.navigate(['/artisan', id]);
}
}