import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Définition de l'interface 'artisan' représentant la structure des objets artisans dans l'application
export interface Artisan{
  id: string;
  name: string;
  specialty: string;
  note: string;
  location:string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

// Service injectable en scope racine, accessible globalement dans l'application
@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
  // Tableau privé simulant une base de données locale d'artisans
  private artisans: Artisan[]= [
    {
        id: "1",
        name: "Vallis Bellemare" ,
        specialty:  "Plombier" ,
        note: "4",
        location:  "Vienne",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"v.bellemare@gmail.com",
        website:"https://plomberie-bellemare.com",
        category:"Bâtiment",
        top: false
      },
      {
        id: "2",
        name: "Amitee Lécuyer",
        specialty: "Couturier",
        note: "4.5",
        location: "Annecy",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"a.amitee@hotmail.com",
        website:"https://lecuyer-couture.com",
        category:"Fabrication",
        top: false
      },
      {
        id: "3",
        name: "Leala Dennis",
        specialty: "Coiffeur",
        note: "3.8",
        location: "Chambéry",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"l.dennos@hotmail.fr",
        website:"https://coiffure-leala-chambery.fr",
        category:"Services",
        top: false
      },
      {
        id: "4",
        name: "Chocolaterie Labbé",
        specialty: "Chocolatier",
        note: "4.9",
        location: "Grenoble",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"chocolaterie-labbe@gmail.com",
        website:"https://chocolaterie-labbe.fr",
        category:"Alimentation",
        top: true
      },
      {
        id: "5",
        name: "Claude Quinn",
        specialty: "Bijoutier",
        note: "4.2",
        location: "Aix-les-bains",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"claude.quinn@gmail.com",
        website:"",
        category:"Fabrication",
        top: false
      },
      {
        id: "6",
        name: "Valérie Laderoute",
        specialty: "Toiletteur",
        note: "4.5",
        location: "Valence",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"v-laredoute@gmail.com",
        website:"",
        category:"Services",
        top: false
      },
      {
        id: "7",
        name: "Boutot & fils",
        specialty: "Menuisier",
        note: "4.7",
        location: "Bourg-en-bresse",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"boutot-menuiserie@gmail.com",
        website:"https://boutot-menuiserie.com",
        category:"Bâtiment",
        top: false
      },
      {
        id: "8",
        name: "CM Graphisme",
        specialty: "Webdesign",
        note: "4.4",
        location: "Valence",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"contact@cm-graphisme.com",
        website:"https://cm-graphisme.com",
        category:"Services",
        top: true
      },
      {
        id: "9",
        name: "Orville Salmons",
        specialty: "Chauffagiste",
        note: "5",
        location: "Evian",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"o-salmons@live.com",
        website:"",
        category:"Bâtiment",
        top: false
      },
      {
        id: "10",
        name: "Au pain chaud",
        specialty: "Boulanger",
        note: "4.8",
        location: "Montélimar",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"aupainchaud@hotmail.com",
        website:"",
        category:"Alimentation",
        top: false
      },
      {
        id: "11",
        name: "Boucherie Dumont",
        specialty: "Boucher",
        note: "4.5",
        location: "Lyon",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"boucherie.dumond@gmail.com",
        website:"",
        category:"Alimentation",
        top: false
      },
      {
        id: "12",
        name: "Mont Blanc Eléctricité",
        specialty: "Electricien",
        note: "4.5",
        location: "Chamonix",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"contact@mont-blanc-electricite.com",
        website:"https://mont-blanc-electricite.com",
        category:"Bâtiment",
        top: false
      },
      {
        id: "13",
        name: "Traiteur Truchon",
        specialty: "Traiteur",
        note: "4.1",
        location: "Privas",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"contact@truchon-traiteur.fr",
        website:"https://truchon-traiteur.fr",
        category:"Bâtiment",
        top: false
      },
      {
        id: "14",
        name: "Le monde des fleurs",
        specialty: "Fleuriste",
        note: "4.6",
        location: "Annonay",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"contact@le-monde-des-fleurs-annonay.fr",
        website:"https://le-monde-des-fleurs-annonay.fr",
        category:"Services",
        top: false
      },
      {
        id: "15",
        name: "Royden Charbonneau",
        specialty: "Carrossier",
        note: "3.8",
        location: "Saint-Priest",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"r.charbonneau@gmail.com",
        website:"",
        category:"Services",
        top: false
      },
      {
        id: "16",
        name: "Ernest Carignan",
        specialty: "Ferronier",
        note: "5",
        location: "Le Puy-en-Velay",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"e-carigan@hotmail.com",
        website:"",
        category:"Fabrication",
        top: true
      },
      {
        id: "17",
        name: "C'est sup'hair",
        specialty: "Coiffeur",
        note: "4.1",
        location: "Romans-sur-Isère",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
        email:"sup-hair@gmail.com",
        website:"https://sup-hair.fr",
        category:"Services",
        top: false
      }
    ]

 // Récupère tous les artisans d’une certaine catégorie (sans tenir compte de la casse)
  getArtisansByCategory(category: string): Artisan[] {
    const filteredArtisans = this.artisans.filter(
      artisan => artisan.category.toLowerCase() === category.toLowerCase()
    );
    return filteredArtisans;
  }

  // Retourne tous les artisans sous forme d’Observable (conforme aux pratiques Angular/RxJS)
  getArtisans(): Observable<Artisan[]> {
    return of(this.artisans);
  }

  // Recherche un artisan par ID (retourne undefined si aucun match)
  getArtisanId(id: string): Observable<Artisan | undefined> {
    const artisan = this.artisans.find(a => a.id === id);
    return of(artisan); // Encapsule le résultat dans un Observable
  }

  // Retourne les 3 meilleurs artisans marqués "top", triés par note décroissante
  getTopArtisans(): Artisan[] {
    return this.artisans
      .filter(artisan => artisan.top) // Ne garde que ceux avec `top: true`
      .sort((a, b) => parseFloat(b.note) - parseFloat(a.note)) // ⚠️ Utilisation de parseFloat car note est un string
      .slice(0, 3); // Limite à 3 résultats
  }

  // Recherche d’artisans via leur nom, spécialité ou localisation (recherche insensible à la casse)
  searchArtisans(query: string): Observable<Artisan[]> {
    query = query.toLowerCase(); // Normalisation de la requête
    return of(this.artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(query) ||
      artisan.specialty.toLowerCase().includes(query) ||
      artisan.location.toLowerCase().includes(query)
    ));
  }
};