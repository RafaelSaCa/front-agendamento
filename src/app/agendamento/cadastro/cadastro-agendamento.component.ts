import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Paciente } from '../../paciente/model/paciente';
import { PacienteService } from '../../paciente/services/paciente.service';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../services/agendamento.service';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro-agendamento',
  standalone: true,
  imports: [ReactiveFormsModule,MatSelectModule,MatButtonModule,
            MatFormFieldModule, MatInputModule, MatDatepickerModule,
            MatNativeDateModule, CommonModule],
  templateUrl: './cadastro-agendamento.component.html',
  styleUrl: './cadastro-agendamento.component.scss'
})
export class CadastroAgendamentoComponent implements OnInit{

  agendamentoForm!: FormGroup;

  pacientes: Paciente[] = [];

  constructor(private formBuilder: FormBuilder,
              private service: AgendamentoService,
              private pacienteService: PacienteService,
              private router: Router,
  ){}

  ngOnInit(){
    this.agendamentoForm = this.formBuilder.group({
      pacienteId:['',Validators.required],
      horario:['',Validators.required],
      hora:['',Validators.required],
      descricao:['',Validators.required]
    });

    this.pacienteService.listarTodos().subscribe(paciente =>{
      this.pacientes = paciente;
    });
  }


  onSubmit() {
    if(this.agendamentoForm.valid){

      let dataFormatada: moment.Moment = moment.utc(this.agendamentoForm.value.horario).local();
      this.agendamentoForm.value.horario = dataFormatada.format("YYYY-MM-DD") + "T" + this.agendamentoForm.value.hora;

      const agendamento: Agendamento = this.agendamentoForm.value;

      this.service.cadastrar(agendamento).subscribe( resposta =>{
        console.log('Agendamento realizado com sucesso!',agendamento);
      },
      error =>{
        console.log('Ocorreu algum erro ao agendar!', error);
      });
    }
  }

  onCancelar() {
   return this.router.navigateByUrl('/agendamentos');
  }

}
