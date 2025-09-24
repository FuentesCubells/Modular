import { Component, OnDestroy, OnInit } from '@angular/core';
import { Housing } from '../../models/housing.model';
import { HousingService } from '../../services/housing.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HousingCardComponent } from "../../components/housing/housingCard.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'crm-housing',
  standalone: true,
  imports: [CommonModule, HousingCardComponent, FormsModule],
  templateUrl: './housing.component.html',
  styleUrl: './housing.component.css'
})
export class HousingComponent implements OnInit, OnDestroy {
  houses: Housing[] = [];
  houseSelected: (Housing | undefined) = undefined;
  // houseSelected: (Housing | undefined) = {
  //       id: "1",
  //       title: "Suite Estándar",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris nibh, lobortis non purus vel, porta maximus nunc. Etiam iaculis ligula vel ante placerat, eu mollis lorem finibus. Quisque eleifend facilisis hendrerit. Quisque malesuada, magna non rutrum accumsan, ex elit sagittis ex, vel consequat mauris odio ac libero. Vestibulum volutpat tristique blandit. Aliquam a convallis libero. Donec in justo libero",
  //       rooms: 3,
  //       bathrooms: 2,
  //       max_people: 6,
  //       max_children: 2,
  //       featured_image_id: 1,
  //       price_per_night: 120,
  //       type: "apartamento",
  //       location: "Madrid, España",
  //       status: "Disponible",
  //       created_at: new Date("2025-09-05T13:14:37.913Z"),
  //       updated_at: new Date("2025-09-05T13:14:37.913Z")
  //   }
  error: string | null = null;
  private $destroy = new Subject<void>();

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getHousingList()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data: Housing[]) => this.houses = data,
        error: (err) => {
          console.error('Error cargando alojamientos', err);
          this.error = 'No se pudieron cargar los alojamientos';
          this.houses = [];
        }
      });
  }

  getHouseSelected(houseId?: string) {
    
    if (houseId !== "" && houseId !== undefined) {
      this.housingService.getHousingById(houseId)
        .pipe(takeUntil(this.$destroy))
        .subscribe({
          next: (data: Housing) =>  this.houseSelected = data,
          error: (err) => {
            console.error('Error cargando alojamientos', err);
            this.error = 'No se pudieron cargar los alojamientos';
            this.houses = [];
          }
        });
    }
   
  }

  isEditing = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    if (!this.houseSelected) return;
    console.log('Guardando cambios...', this.houseSelected);
    // aquí llamarías al service.updateHousing(...)
    this.isEditing = false;
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
