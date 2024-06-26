import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../services/paciente.service';

@Component({
  selector: 'app-dialog-form',
  standalone: true,
  imports: [MatDialogModule,
            MatFormFieldModule,
            MatButtonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatDivider,
          ],
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent implements OnInit {

  formularioPaciente!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: PacienteService,
              private toastr: ToastrService,
              private dialogRef: MatDialogRef<DialogFormComponent>){}


  ngOnInit(): void {

    this.formularioPaciente = this.formBuilder.group({
      nome:['',Validators.required],
      sobrenome:['',Validators.required],
      cpf:['',Validators.required],
      email:['',Validators.required],
    })
  }

  addPaciente() {
    if(this.formularioPaciente.valid){
      const paciente : Paciente = this.formularioPaciente.value;

      this.service.cadastrar(paciente).subscribe(resposta =>{
        this.showSuccess();
        this.dialogRef.close();
        this.formularioPaciente.reset();
        },
        error =>{
          console.log('Ocorreu algum erro ao cadastrar!', error);
        }
    )};


  }

  onCancelar(): void {
    this.dialogRef.close();
  }

  showSuccess() {
    this.toastr.success('Cadastro realizado com sucesso!');
  }


}


