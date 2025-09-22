import { Component, OnDestroy, OnInit } from '@angular/core';
import { Housing, mockHousing } from '../../models/housing.model';
import { HousingService } from '../../services/housing.service';
import { Subject, takeUntil } from 'rxjs';
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
  error: string | null = null;
  private $destroy = new Subject<void>();

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getHousingList()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data: Housing[]) => this.houses = data,
        error: (err) => {
          console.error('Error cargando alojamientos', err);
          this.error = 'No se pudieron cargar los alojamientos';
          this.houses = mockHousing;
        }
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
