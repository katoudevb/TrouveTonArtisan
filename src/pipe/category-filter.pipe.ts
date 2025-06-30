import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../../src/app/models/artisan.model'; 

@Pipe({
  name: 'categoryFilter', // Nom de la pipe utilisée dans les templates (ex: artisans | categoryFilter:'menuiserie')
  standalone: true         // Permet d'utiliser la pipe sans la déclarer dans un NgModule (Angular standalone APIs)
})
export class CategoryFilterPipe implements PipeTransform { // Implémente l'interface nécessaire à toute pipe personnalisée

  transform(artisans: Artisan[], category: string): Artisan[] { // Méthode exécutée lors de l'appel de la pipe
    if (!category || category === 'all') { // Cas où aucune catégorie n’est précisée ou si "all" est sélectionné
      return artisans; // On retourne la liste complète sans filtrage
    }
    
    // Filtrage des artisans dont la catégorie (en minuscule) correspond exactement à celle passée en paramètre (insensible à la casse)
    return artisans.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }
}
