import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../services/agendamento.service';
import { LocalDateTimePipe } from '../pipes/local-date-time.pipe';
import {MatDividerModule} from '@angular/material/divider';
import { MesPipe } from '../pipes/mes.pipe';
import { ResponseAgendamento } from '../model/response-agendamento';
@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [MatCardModule, LocalDateTimePipe, MatDividerModule, MesPipe],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit {

  agendamentos: ResponseAgendamento[] = [];

  constructor(private service : AgendamentoService){}

  ngOnInit(): void {
    this.service.listarTodos().subscribe(agendamentos =>{
      this.agendamentos = agendamentos;
    })
  }




}
