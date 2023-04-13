import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTableComponent } from './form-table/form-table.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'form', component: ReactiveFormComponent },
  { path: 'table', component: FormTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
