import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado-service';
import { Certificado as ICertificado } from '../../interfaces/certificado';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado implements OnInit {
  certificado: ICertificado | undefined;

  @ViewChild('certificadoHTML') certificadoElement!: ElementRef;

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

  async donwloadCertificado() {
    if (this.certificado == undefined) return;

    const canvas = await html2canvas(this.certificadoElement.nativeElement, { scale: 2 });

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `${this.certificado?.name.replaceAll(' ', '_')}-certificado.png`;
    link.click();
  }
}
