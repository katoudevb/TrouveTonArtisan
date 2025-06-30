import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-services',
  imports: [CommonModule, CategoryFilterPipe,FormsModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [ArtisansService]
})
export class ServicesComponent implements OnInit {
  
  // Tableau qui contiendra les artisans de la catégorie "Services"
  servicesArtisans: Artisan[] = [];

  // Variable qui peut servir à mémoriser la catégorie sélectionnée (non utilisée ici)
  selectedCategory: any;

  // Injection du service ArtisansService pour accéder aux données
  // Injection de Router pour la navigation vers les détails d’un artisan
  constructor(
    private ArtisansService: ArtisansService,
    private router: Router
  ) {}

  // Cycle de vie : exécuté à l'initialisation du composant
  ngOnInit(): void {
    // Récupération des artisans de la catégorie "Services"
    // Conversion explicite de la note en nombre (au cas où elle est en string dans le modèle)
    this.servicesArtisans = this.ArtisansService.getArtisansByCategory('Services')
      .map((Artisan: any) => ({
        ...Artisan,
        note: Number(Artisan.note) // Sécurisation du type
      }));
  }

  // Méthode déclenchée lors du clic sur un artisan : redirige vers le composant détail avec l’ID
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId]);
  }
}
