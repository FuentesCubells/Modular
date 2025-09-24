import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'crm-number-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './number-field.component.html',
})
export class NumberFieldComponent {
  @Input() label: string = '';
  @Input() value: number | null = null;
  @Input() editable: boolean = false;
  @Input() class: string = '';

  @Output() valueChange = new EventEmitter<number>();

  onInputChange(newValue: string) {
    const val = Number(newValue);
    this.valueChange.emit(val);
  }
}
