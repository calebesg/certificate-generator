import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado-service';
import { Certificado as ICertificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado implements OnInit {
  certificado: ICertificado | undefined;

  constructor(
    private certificadoService: CertificadoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.certificado = this.certificadoService.certificados.find((item) => item.id == id);
    });
  }
}
