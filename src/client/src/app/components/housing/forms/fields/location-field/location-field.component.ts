import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'crm-location-field',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './location-field.component.html',
  styleUrl: './location-field.component.css'
})
export class LocationFieldComponent {
  private inputSubject = new Subject<string>();
  private sub: Subscription;

  @Input() label: string = '';
  @Input() value: string | null = null;
  @Input() editable: boolean = false;
  @Input() class: string = '';

  @Output() valueChange = new EventEmitter<string>();

  constructor() {
    // Debounce de 300ms antes de emitir al padre
    this.sub = this.inputSubject.pipe(debounceTime(300)).subscribe(val => {
      this.valueChange.emit(val);
    });
  }

  onInputChange(newValue: string) {
    this.inputSubject.next(newValue);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
