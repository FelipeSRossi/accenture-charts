export interface Atendimento {
  data: Date;
  demanda: number;
  capacidade: number;
  atendimento_planejado: number;
  atendimento_realizado: number;
  desvio: number;
}

export const ATENDIMENTOS: Atendimento[] = [
  {
    data: new Date(2021, 4, 3),
    demanda: 1,
    capacidade: 5,
    atendimento_planejado: 2,
    atendimento_realizado: 3,
    desvio: 0
  },
  {
    data: new Date(2021, 5, 3),
    demanda: 1,
    capacidade: 5,
    atendimento_planejado: 2,
    atendimento_realizado: 4,
    desvio: 0
  },
  {
    data: new Date(2021, 7, 3),
    demanda: 1,
    capacidade: 10,
    atendimento_planejado: 2,
    atendimento_realizado: 8,
    desvio: 0
  },
  {
    data: new Date(2021, 5, 4),
    demanda: 1,
    capacidade: 8,
    atendimento_planejado: 2,
    atendimento_realizado: 3,
    desvio: 0
  }
];
