import { MatInputModule } from '@angular/material/input';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../services/paciente.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-paciente',
  standalone: true,
  imports: [ReactiveFormsModule,MatSelectModule,MatButtonModule,MatFormFieldModule, MatInputModule],
  templateUrl: './cadastro-paciente.component.html',
  styleUrl: './cadastro-paciente.component.scss'
})
export class CadastroPacienteComponent implements OnInit {

  pacienteForm!: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private service: PacienteService,
  ){}

  ngOnInit(){
   this.pacienteForm = this.formBuilder.group({
      nome:['',Validators.required],
      sobrenome:['',Validators.required],
      cpf:['',Validators.required],
      email:['',Validators.required],
   });
  }

  onSubmit(){
    if (this.pacienteForm.valid) {
      const paciente: Paciente = this.pacienteForm.value;

      this.service.cadastrar(paciente).subscribe(resposta => {
          console.log('Paciente cadastrado com sucesso!', resposta);

      },
      error => {
        console.log('Ocorreu algum erro ao cadastrar!', error);
      }
     );
    }
  }


}


