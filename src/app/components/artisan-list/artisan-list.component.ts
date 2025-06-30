import { Component, OnInit } from '@angular/core';
import { Artisan } from '../../../services/artisan.service';
import { ArtisansService } from '../../../services/artisan.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-artisan-list', 
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  templateUrl: './artisan-list.component.html' 
})
export class ArtisanListComponent implements OnInit {

  artisans: Artisan[] = []; 
  // Tableau d'artisans qui sera alimenté via un service (initialement vide)

  selectedCategory: string = ''; 
  // Variable qui stocke la catégorie sélectionnée pour filtrage (initialement vide)

  categories: string[] = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation']; 
  // Liste des catégories disponibles pour filtrer la liste des artisans

  constructor(
    private ArtisansDataServices: ArtisansService, 
    // Injection du service qui récupère les données des artisans

    private router: Router 
    // Injection du routeur Angular pour naviguer entre les pages
  ) { }

  ngOnInit(): void {
    // Au chargement du composant, on récupère la liste des artisans via le service
    this.ArtisansDataServices.getArtisans().subscribe((data: Artisan[]) => {
      this.artisans = data; 
      // Remplissage du tableau avec les données reçues (Observable)
    });
  }

  // Méthode appelée pour naviguer vers la page détail d’un artisan
  viewDetails(id: string) {
    this.router.navigate(['/artisan', id]);
  }
}