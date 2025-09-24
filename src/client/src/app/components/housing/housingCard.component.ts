import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Housing } from '../../models/housing.model';
import { FormsModule } from '@angular/forms';
import { TextFieldComponent } from './forms/fields/text-field/text-field.component';
import { LocationFieldComponent } from './forms/fields/location-field/location-field.component';
import { NumberFieldComponent } from './forms/fields/number-field/number-field.component';
import { OptionFieldComponent } from './forms/fields/option-field/option-field.component';

@Component({
  selector: 'crm-housing-card',
  standalone: true,
  imports: [CommonModule, FormsModule, TextFieldComponent, LocationFieldComponent, NumberFieldComponent],
  templateUrl: './housingCard.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingCardComponent {
  editable = false;
  @Input() house: Housing | null = null;
  @Output() houseSelected = new EventEmitter<string | undefined>();


  handleClick(houseId?: string) {
    this.houseSelected.emit(houseId);
  }
}
