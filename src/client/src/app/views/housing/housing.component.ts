import { Component, OnDestroy, OnInit } from '@angular/core';
import { Housing, mockHousing } from '../../models/housing.model';
import { HousingService } from '../../services/housing.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HousingCardComponent } from "../../components/housing/housingCard.component";
import { FormsModule } from '@angular/forms';
import { HousingFormComponent } from '../../components/housing/forms/housing-form/crm-housing-form.component';

@Component({
  selector: 'crm-housing',
  standalone: true,
  imports: [CommonModule, HousingCardComponent, HousingFormComponent],
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit, OnDestroy {
  houses: Housing[] = [];
  houseSelected: Housing | null = null;
  isAsideOpen = false;
  error: string | null = null;
  private $destroy = new Subject<void>();

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getHousingList()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data: Housing[]) => this.houses = mockHousing, // o data si quieres usar la API
        error: (err) => {
          console.error('Error cargando alojamientos', err);
          this.error = 'No se pudieron cargar los alojamientos';
          this.houses = [];
        }
      });
  }

  handleHouseSelected(houseId?: string): void {
    // find devuelve Housing | undefined, convertimos a null si no encuentra nada
    this.houseSelected = this.houses.find(house => house.id === houseId) || null;
    this.isAsideOpen = !!this.houseSelected;
  }

  onCloseAside( closeAside: boolean ): void {
    this.isAsideOpen = !closeAside;
    this.houseSelected = null;
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
