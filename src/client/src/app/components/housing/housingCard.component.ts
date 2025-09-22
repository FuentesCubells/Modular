import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Housing } from '../../models/housing.model';

@Component({
  selector: 'crm-housing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housingCard.component.html',
  styleUrl: './housing.component.css'
})
export class HousingCardComponent {
  @Input() house: Housing | null = null;
}
