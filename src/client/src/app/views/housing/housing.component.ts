import { Component, OnDestroy, OnInit } from '@angular/core';
import { Housing, mockHousing } from '../../models/housing.model';
import { HousingService } from '../../services/housing.service';
import { Subject, take, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HousingCardComponent } from "../../components/housing/housingCard.component";

@Component({
  selector: 'crm-housing',
  standalone: true,
  imports: [CommonModule, HousingCardComponent],
  templateUrl: './housing.component.html',
  styleUrl: './housing.component.css'
})
export class HousingComponent implements OnInit, OnDestroy {
  houses: Housing[] = [];
  houseSelected: (Housing | undefined) = {
        id: "1",
        title: "Suite Estándar",
        description: "Apartamento céntrico en Madrid",
        rooms: 3,
        bathrooms: 2,
        max_people: 6,
        max_children: 2,
        featured_image_id: 1,
        price_per_night: 120,
        type: "apartamento",
        location: "Madrid, España",
        status: "Disponible",
        created_at: new Date("2025-09-05T13:14:37.913Z"),
        updated_at: new Date("2025-09-05T13:14:37.913Z")
    }
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

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
