import { Component, OnInit } from '@angular/core';
import { Atendimento, ATENDIMENTOS } from '../models/atendimento';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {
  constructor() {}

  tableRows = ATENDIMENTOS;
  chartRows = ATENDIMENTOS;
  chartData: any;

  clickedRows = new Set<Atendimento>();

  selectRow(row: Atendimento) {
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }

    if (this.clickedRows.size == 0) {
      this.chartRows = ATENDIMENTOS;
    } else {
      this.chartRows = Array.from(this.clickedRows);
    }

    this.updateChart()
  }

  updateChart() {
    let grouped = [0,0,0,0,0,0,0,0,0,0,0,0];

    this.chartRows.forEach((row) => {
      grouped[row.data.getMonth()] += row.capacidade - row.atendimento_realizado
    });

    this.chartData = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [
        {
          label: "Capacidade e Atendimento Realizado",
          data: grouped,
          backgroundColor: "#3f51b5"
        }
      ]
    };
  }

  ngOnInit() {
    this.updateChart()
  }
}
