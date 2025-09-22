import { Routes } from '@angular/router';
import { HousingComponent } from './views/housing/housing.component';



export const routes: Routes = [
    {
        path: 'housing',
        component: HousingComponent,
        data: { 
            title: 'Housing', 
            icon: 'pi pi-building', 
            showInMenu: true 
        }
    }
];
