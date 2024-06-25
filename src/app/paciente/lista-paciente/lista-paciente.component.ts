import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-lista-paciente',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.scss'
})
export class ListaPacienteComponent implements OnInit {

pacientes: Paciente[] = [];
displayedColumns: string[] = ['nome', 'sobrenome','cpf','email',]

  constructor(private service: PacienteService){}


  ngOnInit(): void {
    this.service.listarTodos().subscribe(paciente =>{
      this.pacientes = paciente;
    });
  }

}
