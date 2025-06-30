import { Component } from '@angular/core'; 
// Import du décorateur Component pour définir un composant Angular.

import { ActivatedRoute, Router } from '@angular/router'; 
// ActivatedRoute permet de récupérer les paramètres de la route (ex: id dans URL).
// Router permet de naviguer programmatiquement entre les routes.

import { OnInit } from '@angular/core'; 
// Interface OnInit pour exécuter du code au démarrage du composant.

import { ArtisansService } from '../../../services/artisan.service'; 
// Service custom pour récupérer les données des artisans (backend/API).

import { Artisan } from '../../models/artisan.model'; 
// Modèle de données pour un artisan.

import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-artisan-detail', 
  templateUrl: './artisan-detail.component.html', 
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule] 
})
export class ArtisanDetailComponent implements OnInit{

  artisan: Artisan | undefined; 
  // Propriété qui contiendra l'artisan chargé depuis le service.

  contactForm: FormGroup; 
  // Représente le formulaire réactif pour contacter l'artisan.

  submitted = false; 
  // Indicateur si le formulaire a été soumis (pour afficher erreurs).

  successMessage = ''; 
  // Message de succès après soumission.

  errorMessage = ''; 
  // Message d'erreur en cas de validation échouée.

  constructor(
    private route: ActivatedRoute, // Injection pour accéder à l'URL
    private router: Router, // Injection pour navigation
    private ArtisanServices: ArtisansService, // Injection du service artisans
    private fb: FormBuilder,// Injection du form builder pour formulaire
    private http: HttpClient
  ) {
    // Initialisation du formulaire avec des champs + validations
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], 
      // champ "name" obligatoire et min 3 caractères
      subject: ['', [Validators.required, Validators.minLength(5)]], 
      // champ "subject" obligatoire et min 5 caractères
      message: ['', [Validators.required, Validators.minLength(10)]]
      // champ "message" obligatoire et min 10 caractères
    });
  }

  ngOnInit() {
    // Méthode exécutée à l'initialisation du composant
    const id = this.route.snapshot.paramMap.get('id'); 
    // Récupère l'id passé en paramètre d'URL

    if (id) { 
      // Si un id est présent, on récupère les données via le service
      this.ArtisanServices.getArtisanId(id).subscribe((data: any) => {
        if (data) {
          // Si les données existent, on transforme la note en nombre (si besoin)
          this.artisan = {
            ...data,
            note: typeof data.note === 'string' ? Number(data.note) : data.note
          } as Artisan;
        } else {
          this.artisan = undefined; 
          // Si pas de données, on met undefined (pas trouvé)
        }
      });
    }
  }

  // Méthode pour naviguer vers les détails d'un artisan (bouton)
  viewDetails(id: string) {
    this.router.navigate(['/artisan', id]); 
    // Navigation programmée vers la route /artisan/:id
  }

  // Méthode appelée à la soumission du formulaire
onSubmit(): void {
    if (this.contactForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    // Envoi du formulaire au backend (qui enverra le mail via Maildev)
    this.http.post('http://localhost:3000/api/contact', this.contactForm.value).subscribe({
      next: () => {
        this.successMessage = 'Message envoyé avec succès';
        this.errorMessage = '';
        this.contactForm.reset();
        this.submitted = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors de l\'envoi du message.';
      }
    });
  }

  // Getter pour accéder facilement aux contrôles du formulaire depuis le template
  get formControls() {
    return this.contactForm.controls;
  }
}