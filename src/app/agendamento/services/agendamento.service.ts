import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { Observable } from 'rxjs';
import { ResponseAgendamento } from '../model/response-agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl ='http://localhost:8080/api/agenda';

  constructor(private httpClient: HttpClient) { }

  cadastrar(agendamento: Agendamento): Observable<Agendamento> {
    return this.httpClient.post<Agendamento>(this.apiUrl,agendamento);

  }

  // listarTodos(): Observable<Agendamento[]>{
  //   return this.httpClient.get<Agendamento[]>(this.apiUrl);
  // }

  listarTodos(): Observable<ResponseAgendamento[]>{
    return this.httpClient.get<ResponseAgendamento[]>(this.apiUrl);
  }
}
