import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  @Input() name: string = '';
  @Input() data: string = '';
  @Input() id: string = '';

  constructor(private router: Router) {}

  goToCertificado() {
    this.router.navigate(['certificado', this.id]);
  }
}
