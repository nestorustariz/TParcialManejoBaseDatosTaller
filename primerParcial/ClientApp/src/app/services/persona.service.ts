import { HttpClient } from '@angular/common/http';
import { Injectable,Inject} from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  baseUrl: string;
 
  constructor(private http:HttpClient,@Inject('BASE_URL') baseUrl: string,private handleErrorService:HandleHttpErrorService) { this.baseUrl = baseUrl}

  Consultar(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.baseUrl + 'api/Persona')
    .pipe(
        tap(_ => this.handleErrorService.log('Datos enviados')),
        catchError(this.handleErrorService.handleError<Persona[]>('Consulta Persona', null))
      );
    
  }

  registrar(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.baseUrl + 'api/Persona',persona).pipe(tap(_=> this.handleErrorService.log('Datos enviados')),
      catchError(this.handleErrorService.handleError<Persona>('Persona Registrada',null)));
  }

  buscarIdentificacion(identificacion:string):Observable<Persona>
  {
    return this.http.get<Persona>(this.baseUrl + 'api/Persona/' + identificacion).pipe(
      catchError(this.handleErrorService.handleError<Persona>('Consulta identificacion', null))
    );
  }
}
