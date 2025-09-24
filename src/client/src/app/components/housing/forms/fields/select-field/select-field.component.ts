import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'crm-select-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-field.component.html',
})
export class SelectFieldComponent {
  @Input() label: string = '';
  @Input() value: string | number | null = null;
  @Input() editable: boolean = false;
  @Input() class: string = '';
  @Input() options: { label: string; value: string | number }[] = [];

  @Output() valueChange = new EventEmitter<string | number>();

  onInputChange(newValue: string | number) {
    this.valueChange.emit(newValue);
  }
}
