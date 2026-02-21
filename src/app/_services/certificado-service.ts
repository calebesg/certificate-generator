import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  certificados: Certificado[] = [];

  addCertificado(certificado: Certificado): void {
    this.certificados.push({ ...certificado });
  }
}
