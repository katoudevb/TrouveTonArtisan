import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // Méthode appelée lors d'une recherche.
  // Vérifie que la chaîne de recherche n'est pas vide ni composée uniquement d'espaces.
  // Si valide, redirige vers la route '/recherche' en passant la requête en paramètre d'URL.
onSearch(query: string) {
    if (query && query.trim() !== '') {
      this.router.navigate(['/recherche'], { queryParams: { query } });
    }
  }
}