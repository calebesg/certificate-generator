import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  name: string = '';
  activity: string = '';
  activities: string[] = ['Angular', 'React'];
}
