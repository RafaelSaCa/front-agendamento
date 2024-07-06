import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { Observable, catchError, of, tap } from 'rxjs';
import { DialogErroComponent } from '../../shared/dialog-erro/dialog-erro.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { PacientePaginado } from '../model/paciente-paginado';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-lista-paciente',
  standalone: true,
  imports: [MatTableModule, HeaderComponent,MatDividerModule, MatButtonModule,
            MatIconModule, MatDialogModule, MatPaginatorModule, CommonModule, MatProgressBarModule],
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.scss'
})
export class ListaPacienteComponent implements OnInit {

  pacientes$: Observable<PacientePaginado> | null = null;

  displayedColumns: string[] = ['nome', 'sobrenome','cpf','email',]

  @ViewChild(MatPaginator) paginator!: MatPaginator;

   pageIndex = 0;
   pageSize = 10;



  constructor(private service: PacienteService, public dialog: MatDialog){
    this.refresh();
  }


  refresh(pageEvent: PageEvent = {length:0, pageIndex:0, pageSize:10}) {
    this.pacientes$ = this.service.listaPaginada(pageEvent.pageIndex, pageEvent.pageSize)
        .pipe(
          tap(() => {
            this.pageIndex = pageEvent.pageIndex;
            this.pageSize = pageEvent.pageSize;
          }),
          catchError( erro =>{
           this.onError('Ocorreu algum erro ao carregar os dados!');
            return of({ content: [], totalElements: 0, totalPages: 0 })
          })
        );
  }

  ngOnInit(): void {
    // this.carregaDados();
    // this.carregaDadosPaginados();
  }


  addPaciente(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
     minWidth: '580px',
     minHeight: '580px',

    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.refresh();
    });
  }

  // carregaDados(){
  //   this.service.listarTodos().subscribe(paciente =>{
  //     this.pacientes = paciente;
  //   });
  // }

  // carregaDadosPaginados(){
  //   if (this.paginator) {
  //     this.service.listaPaginada(this.paginator.pageIndex, this.paginator.pageSize)
  //         .subscribe(dados =>{
  //           this.pacientes.data = dados.content;
  //           this.totalElements = dados.totalElements;
  //           this.paginator.length = this.totalElements;
  //         });
  //   }
  // }

  onError(mensagemErro: string){
    this.dialog.open(DialogErroComponent, {
        data: mensagemErro
      });
  }
}
