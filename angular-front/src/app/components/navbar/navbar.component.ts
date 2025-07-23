import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logo: string = "images/favicon.ico";
  title: string = "electricity-Business";
  menu = [
    { label: "Accueil", path: "home" },
    { label: "A propos", path: "a-propos" },
    { label: "Contact", path: "contact" },
    { label: "Réservation", path: "reservation" },
    { label: "Connexion", path: "login" },
    { label: "Inscription", path: "register" }
  ];
}

