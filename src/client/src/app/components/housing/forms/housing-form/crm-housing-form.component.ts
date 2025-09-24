import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TextFieldComponent } from '../fields/text-field/text-field.component';
import { FormsModule } from '@angular/forms';
import { LocationFieldComponent } from "../fields/location-field/location-field.component";
import { CommonModule } from '@angular/common';
import { SelectFieldComponent } from "../fields/select-field/select-field.component";
import { NumberFieldComponent } from '../fields/number-field/number-field.component';
import { OptionFieldComponent } from '../fields/option-field/option-field.component';
import { Housing } from '../../../../models/housing.model';


@Component({
  selector: 'crm-housing-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TextFieldComponent,
    LocationFieldComponent,
    SelectFieldComponent,
    NumberFieldComponent,
    OptionFieldComponent
  ],
  templateUrl: './crm-housing-form.component.html',
  styleUrls: ['./crm-housing-form.component.css']
})
export class HousingFormComponent implements OnInit, OnChanges {
  editable = false;
  statusOptions = [
    { label: 'Disponible', value: 'Disponible' },
    { label: 'Ocupado', value: 'Ocupado' },
    { label: 'Mantenimiento', value: 'Mantenimiento' },
    { label: 'Limpieza', value: 'Limpieza' },
  ];
  formData: Housing = {
    id: "",
    title: '',
    type: '',
    location: '',
    description: '',
    status: 'Disponible',
    main_equipment: [],
    rooms: 0,
    bathrooms: 0,
    max_people: 0,
    price_per_night: '0'
  };

  @Input() house: Housing | undefined;
  @Output() closeAside = new EventEmitter<boolean>();
  ngOnInit(): void {
    // Inicializar formData con fallback seguro
    this.populateFormData(this.house);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['house'] && this.house) {
      this.populateFormData(this.house);
      this.editable = false; // opcional: resetear modo edición al cambiar de house
    }
  }
   private populateFormData(house: any) {
    this.formData = {
      id: house?.id || '',
      title: house?.title || '',
      type: house?.type || '',
      location: house?.location || '',
      description: house?.description || '',
      status: house?.status || 'Disponible',
      main_equipment: house?.main_equipment?.map((e: any) => ({ ...e })) ?? [],
      rooms: house?.rooms || 1,
      bathrooms: house?.bathrooms || 1,
      max_people: house?.max_people || 1,
      price_per_night: house?.price_per_night || '0'
    };
  }
  onCancel() {
    this.editable = false;
  }
  onCloseAside() {
    this.closeAside.emit(true);
  }
  onSubmit() {
    this.editable = !this.editable;
    console.log('Formulario enviado:', this.formData);
  }
}
