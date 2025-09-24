import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'crm-option-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './option-field.component.html',
})
export class OptionFieldComponent {
  @Input() label: string = '';
  @Input() value: boolean = false; // si está activo o no
  @Input() editable: boolean = false;
  @Input() class: string = ''

  @Output() valueChange = new EventEmitter<boolean>();

  toggle() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
