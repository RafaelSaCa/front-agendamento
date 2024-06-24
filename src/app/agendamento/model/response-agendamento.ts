import { Paciente } from "../../paciente/model/paciente";

export interface ResponseAgendamento {

  descricao: string;
  horario: string;
  hora: string;
  paciente: Paciente;
}
