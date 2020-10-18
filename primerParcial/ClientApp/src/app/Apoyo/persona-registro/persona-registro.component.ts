import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona:Persona;
  personaBus:Persona;
  constructor(private service:PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona();
  }

  add(){
    this.service.buscarIdentificacion(this.persona.identificacion).subscribe(p=> {
      this.personaBus = p;
      if (this.personaBus == null) {
        this.service.registrar(this.persona).subscribe(p => {
          if(p != null){
            alert('Persona guardada');
            this.persona = p;
          }
        });
      }else{
        alert('Ya esta registrado');
      }
    });   
  }

}
