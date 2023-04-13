import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dataListComponent } from './components/data-list/data-list.component';
import { DataCreateComponent } from './components/data-create/data-create.component';
import { DataUpdateComponent } from './components/data-update/data-update.component';

const routes: Routes = [
  {path:'', redirectTo:'dataList',pathMatch:'full'},
  {path:'dataList', component: dataListComponent},
  {path:'dataUpdate/:id', component: DataUpdateComponent},
  {path:'dataCreate', component: DataCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
