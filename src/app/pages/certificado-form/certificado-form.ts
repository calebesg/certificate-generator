import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, NgStyle, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  certificado: Certificado = {
    name: '',
    activities: [],
  };
  activity: string = '';

  addActivity() {
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

    console.log(this.certificado);
  }
}
