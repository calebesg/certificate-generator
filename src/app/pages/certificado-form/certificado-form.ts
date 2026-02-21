import { Component, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { formatDate } from '../../utils/fomatDate';
import { CertificadoService } from '../../_services/certificado-service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, NgStyle, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  certificado: Certificado = this.initialState();
  activity: string = '';

  constructor(
    private certificadoService: CertificadoService,
    private route: Router,
  ) {}

  // @ViewChild('form') form!: NgForm;

  addActivity() {
    if (this.activity.length == 0) return;

    let existActivity: boolean = this.certificado.activities.includes(this.activity);

    if (existActivity) return alert('A atividade já está foi adicinada');

    this.certificado.activities = [...this.certificado.activities, this.activity];
    this.activity = '';
  }

  removeActivity(id: number) {
    this.certificado.activities = this.certificado.activities.filter((_, index) => index != id);
  }

  isNotValidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  isNotValidForm() {
    return !(this.certificado.activities.length > 0 && this.certificado.name.length > 0);
  }

  submit() {
    if (this.isNotValidForm()) return;

    this.certificado.id = uuidv4();
    this.certificado.issueDate = formatDate(new Date());

    this.certificadoService.addCertificado(this.certificado);

    this.route.navigate(['certificado', this.certificado.id]);
  }

  initialState(): Certificado {
    return {
      id: '',
      name: '',
      activities: [],
      issueDate: '',
    };
  }
}
