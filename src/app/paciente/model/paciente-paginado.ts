import { Paciente } from "./paciente";

export interface PacientePaginado {
  content: Paciente[];
  totalElements: number;
  totalPages: number;

}
