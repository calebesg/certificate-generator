import { Component, OnInit } from '@angular/core';

import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado-service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {
  id: string | null = null;
  certificado: Certificado | undefined;

  certificados: Certificado[] = [];

  constructor(
    private certificadoService: CertificadoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find((item) => item.id == this.id);
    });

    this.certificados = this.certificadoService.certificados;
  }
}
