import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SumaComponent } from './suma/suma.component';

const routes: Routes = [
  {path:'suma',component:SumaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
