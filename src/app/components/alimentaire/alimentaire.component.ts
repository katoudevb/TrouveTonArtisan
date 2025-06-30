// Importation des modules Angular nécessaires
import { Component } from '@angular/core';              
import { OnInit } from '@angular/core';                 
import { Router } from '@angular/router';                
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe';

@Component({
  selector: 'app-alimentaire',                   
  imports: [CommonModule,FormsModule,CategoryFilterPipe],       
  templateUrl: './alimentaire.component.html',         
  styleUrls: ['./alimentaire.component.scss'],     
})
export class AlimentaireComponent implements OnInit {    // Déclaration de la classe avec interface de cycle de vie

  // Déclaration d'un tableau pour stocker les artisans filtrés par catégorie.
alimentationArtisans: Artisan[] = [];
// Variable pour stocker la catégorie sélectionnée (initialisée vide).
selectedCategory: string = '';

constructor(
  private ArtisansService: ArtisansService,  // Injection du service pour récupérer les artisans
  private router: Router                      // Injection du routeur pour navigation
) { }

ngOnInit(): void {
  // Au démarrage du composant, récupération synchronisée des artisans de la catégorie 'Alimentation'
  // via le service. Chaque artisan est transformé pour s'assurer que la note est bien un nombre.
  this.alimentationArtisans = this.ArtisansService.getArtisansByCategory('Alimentation')
    .map((Artisan: any) => ({
      ...Artisan,
      note: Number(Artisan.note)
    }));
}

// Méthode pour naviguer vers la page de détails d’un artisan donné via son identifiant.
detailArtisan(artisanId: string) {
  this.router.navigate(['/artisan', artisanId]);
}
}