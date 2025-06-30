// Importation des modules et services nécessaires
import { Component } from '@angular/core';               // Décorateur pour définir un composant Angular
import { OnInit } from '@angular/core';                  // Interface du cycle de vie Angular (hook ngOnInit)
import { Router } from '@angular/router';                // Service de navigation pour rediriger vers une autre route
import { ArtisansService } from '../../../services/artisan.service';  // Service métier pour manipuler les artisans
import { Artisan } from '../../models/artisan.model';    // Modèle de données représentant un artisan
import { CommonModule } from '@angular/common';          // Module Angular de base (ngIf, ngFor, etc.)
import { FormsModule } from '@angular/forms';            // Module pour les formulaires Angular (ngModel)
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe'; // Pipe pour filtrer les

@Component({
  selector: 'app-batiment',
  imports: [CommonModule, FormsModule, CategoryFilterPipe],
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.scss'],
})
export class BatimentComponent implements OnInit {

batimentArtisans: Artisan[] = [];
selectedCategory: string = '';
  
  constructor(
    private ArtisansService: ArtisansService,
    // Injection du service pour récupérer les artisans

    private router: Router
    // Injection du routeur pour navigation
  ) { }

 ngOnInit(): void {
    // Appel au service pour récupérer les artisans filtrés par catégorie "Fabrication"
    // et conversion de la note en nombre pour s'assurer du typage correct
    this.batimentArtisans = this.ArtisansService.getArtisansByCategory('Fabrication')
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