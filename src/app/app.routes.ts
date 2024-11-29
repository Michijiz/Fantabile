// app-routing.module.ts
import { Routes } from '@angular/router';
import { PrimaPaginaComponent } from './prima-pagina/prima-pagina.component';

export const routes: Routes = [
  { path: '', component: PrimaPaginaComponent },
  { path: '**', redirectTo: '' },
];
