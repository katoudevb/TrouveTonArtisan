// Importation des modules et services nécessaires
import { Component } from '@angular/core';               // Décorateur pour définir un composant Angular
import { OnInit } from '@angular/core';                  // Interface du cycle de vie Angular (hook ngOnInit)
import { Router } from '@angular/router';                // Service de navigation pour rediriger vers une autre route
import { ArtisansService } from '../../../services/artisan.service';  // Service métier pour manipuler les artisans
import { Artisan } from '../../models/artisan.model';    // Modèle de données représentant un artisan
import { CommonModule } from '@angular/common';          // Module Angular de base (ngIf, ngFor, etc.)
import { FormsModule } from '@angular/forms';            // Module pour les formulaires Angular (ngModel)
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe'; // Pipe pour filtrer les
// Définition du composant
@Component({
  selector: 'app-fabrication',                          // Nom de la balise HTML utilisée pour ce composant
  imports: [CommonModule, FormsModule, CategoryFilterPipe],                              // Modules Angular importés localement (standalone components)
  templateUrl: './fabrication.component.html',          // Chemin vers le template HTML du composant
  styleUrls: ['./fabrication.component.scss']           // Feuilles de style spécifiques au composant
})
export class FabricationComponent implements OnInit {    // Déclaration de la classe du composant, implémentant OnInit

  fabricationArtisans: Artisan[] = [];                   // Propriété contenant la liste des artisans de la catégorie "Fabrication"
  selectedCategory: string = '';
  
  // Injection des services nécessaires dans le constructeur
  constructor(
    private ArtisansService: ArtisansService,           // Service pour accéder aux données des artisans
    private router: Router                              // Service de navigation
  ) {}

  // Hook du cycle de vie appelé une fois le composant initialisé
  ngOnInit(): void {
    // Appel au service pour récupérer les artisans filtrés par catégorie "Fabrication"
    // et conversion de la note en nombre pour s'assurer du typage correct
    this.fabricationArtisans = this.ArtisansService.getArtisansByCategory('Fabrication')
      .map((Artisan: any) => ({                         // Pour chaque artisan retourné :
        ...Artisan,                                     // On garde toutes les propriétés existantes
        note: Number(Artisan.note)                      // On force le champ "note" à être un nombre
      }));
  }

  // Méthode déclenchée lors d’un clic sur un artisan, redirige vers la page de détail
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId]);      // Navigation dynamique vers la route /artisan/:id
  }
}