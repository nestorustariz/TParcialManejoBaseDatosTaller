import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

  personas:Persona[];
  Total :Number = 0;
  constructor(private service:PersonaService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.service.Consultar().subscribe(result => {
      this.personas = result;
    });
  }
}
