import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ResponseAgendamento } from '../model/response-agendamento';
import { LocalDateTimePipe } from '../pipes/local-date-time.pipe';
import { MesPipe } from '../pipes/mes.pipe';
import { AgendamentoService } from '../services/agendamento.service';
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
