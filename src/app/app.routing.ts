import { RouterModule, Routes } from '@angular/router';
import {AddAirplaneComponent} from './add-airplane/add-airplane.component';
import {ListAirplaneComponent} from './list-airplane/list-airplane.component';
import {EditAirplaneComponent} from './edit-airplane/edit-airplane.component';

const routes: Routes = [
  { path: '', component: ListAirplaneComponent },
  { path: 'add-airplane', component: AddAirplaneComponent },
  { path: 'edit-airplane/:id', component: EditAirplaneComponent },
  { path: 'list-airplane', component: ListAirplaneComponent }
];

export const routing = RouterModule.forRoot(routes);
