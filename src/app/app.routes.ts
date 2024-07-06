import { Routes } from '@angular/router';
import { CreateComponent } from './clients/create/create.component';
import { ListComponent } from './clients/list/list.component';
import { ViewComponent } from './clients/view/view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  {
    path: 'client',
    component: ListComponent},
    
      {
        path: 'detail/:id',
        component: ViewComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },

];