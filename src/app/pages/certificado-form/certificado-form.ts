import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, NgStyle, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  name: string = '';
  activity: string = '';
  activities: string[] = ['Angular', 'React'];

  addActivity() {
    let existActivity: boolean = this.activities.includes(this.activity);

    if (existActivity) return alert('A atividade já está foi adicinada');

    this.activities = [...this.activities, this.activity];
    this.activity = '';
  }

  removeActivity(id: number) {
    this.activities = this.activities.filter((_, index) => index != id);
  }

  isNotValidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  isNotValidForm() {
    return !(this.activities.length > 0 && this.name.length > 0);
  }
}
