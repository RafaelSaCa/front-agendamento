import { Component, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../../shared/header/header.component';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-lista-paciente',
  standalone: true,
  imports: [MatTableModule, HeaderComponent,MatDividerModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.scss'
})
export class ListaPacienteComponent implements OnInit {

  pacientes: Paciente[] = [];
  displayedColumns: string[] = ['nome', 'sobrenome','cpf','email',]

  constructor(private service: PacienteService, public dialog: MatDialog){}


  ngOnInit(): void {
    this.carregaDados();
  }


  addPaciente(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
     minWidth: '580px',
     minHeight: '580px',

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.carregaDados();
    });
  }

  carregaDados(){
    this.service.listarTodos().subscribe(paciente =>{
      this.pacientes = paciente;
    });
  }
}
