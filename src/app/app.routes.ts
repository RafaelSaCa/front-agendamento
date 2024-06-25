import { Routes } from '@angular/router';
import { ListaPacienteComponent } from './paciente/lista-paciente/lista-paciente.component';
import { ListagemComponent } from './agendamento/listagem/listagem.component';

export const routes: Routes = [

  {
    path: '',
    component:ListaPacienteComponent
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
