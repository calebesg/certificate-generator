import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-secondary-button',
  imports: [NgStyle],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.css',
})
export class SecondaryButton {
  @Input() textButton: string = '';
  @Input() phClass: string = '';
  @Input() disabled: boolean = false;
}
