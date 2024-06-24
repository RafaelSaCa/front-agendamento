import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apiUrl= 'http://localhost:8080/api/paciente';

  constructor(private httpClient: HttpClient) {}

    cadastrar( paciente: Paciente): Observable<Paciente>{
      return this.httpClient.post<Paciente>(this.apiUrl,paciente);
    }

    listarTodos(): Observable<Paciente[]>{
      return this.httpClient.get<Paciente[]>(this.apiUrl);
    }
 }

