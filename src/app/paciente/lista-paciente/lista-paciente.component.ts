import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../services/paciente.service';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-lista-paciente',
  standalone: true,
  imports: [MatTableModule, HeaderComponent],
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.scss'
})
export class ListaPacienteComponent implements OnInit {

  @Output() textoHeader =  'sfsdsdfsdf';

  pacientes: Paciente[] = [];
  displayedColumns: string[] = ['nome', 'sobrenome','cpf','email',]

  constructor(private service: PacienteService){}


  ngOnInit(): void {
    this.service.listarTodos().subscribe(paciente =>{
      this.pacientes = paciente;
    });
  }

}
