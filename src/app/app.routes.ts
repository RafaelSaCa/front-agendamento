import { CadastroAgendamentoComponent } from './agendamento/cadastro/cadastro-agendamento.component';
import { Routes } from '@angular/router';
import { CadastroPacienteComponent } from './paciente/cadastro/cadastro-paciente.component';
import { ListagemComponent } from './agendamento/listagem/listagem.component';

export const routes: Routes = [

  {
    path: '',
    component: CadastroPacienteComponent
  },
  {
    path: 'cadastro-paciente',
    loadComponent:  () => import ( './paciente/cadastro/cadastro-paciente.component').then(m => m.CadastroPacienteComponent),
  },
  {
    path: 'agendamentos',
    component: ListagemComponent
  },
  {
    path: 'agendamento',
    loadComponent: () => import ( './agendamento/cadastro/cadastro-agendamento.component').then(m => m.CadastroAgendamentoComponent)
  }
];
