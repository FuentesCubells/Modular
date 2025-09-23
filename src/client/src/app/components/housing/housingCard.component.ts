import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Housing } from '../../models/housing.model';

@Component({
  selector: 'crm-housing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housingCard.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingCardComponent {
  @Input() house: Housing | null = null;
  @Output() houseSelected = new EventEmitter<string | undefined>();

  handleClick(houseId?: string) {
    this.houseSelected.emit(houseId);
  }
}
