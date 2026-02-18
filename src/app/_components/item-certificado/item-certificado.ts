import { Component } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  id: number = 1;

  constructor(private router: Router) {}

  goToCertificado() {
    this.router.navigate(['certificado', this.id]);
  }
}
