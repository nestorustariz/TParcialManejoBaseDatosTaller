import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonaRegistroComponent } from './Apoyo/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './Apoyo/persona-consulta/persona-consulta.component';

const routes: Routes = [
  {
    path: 'personaRegistro',
    component:PersonaRegistroComponent
  },
  {
    path: 'personaConsulta',
    component:PersonaConsultaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
