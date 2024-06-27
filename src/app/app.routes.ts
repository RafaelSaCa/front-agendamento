import { Routes } from '@angular/router';
import { ListaPacienteComponent } from './paciente/lista-paciente/lista-paciente.component';
import { ListagemComponent } from './agendamento/listagem/listagem.component';

export const routes: Routes = [

  {
    path: '',
    component:ListaPacienteComponent,
    data: {textoHeader:'Relação de Pacientes'}
  },
  {
    path: 'cadastro-paciente',
    loadComponent:  () => import ( './paciente/cadastro/cadastro-paciente.component').then(m => m.CadastroPacienteComponent),
    data: {textoHeader:'Cadastro de Paciente'}
  },
  {
    path: 'agendamentos',
    component: ListagemComponent,
    data: {textoHeader:'Relação de Agendamentos'}
  },
  {
    path: 'agendamento',
    loadComponent: () => import ( './agendamento/cadastro/cadastro-agendamento.component').then(m => m.CadastroAgendamentoComponent),
    data: {textoHeader:'Agendar Procedimento'}
  }
];
