import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Atendimento } from '../models/atendimento';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  moment = moment
  
  displayedColumns: string[] = [
    'data',
    'demanda',
    'capacidade',
    'atendimento_planejado',
    'atendimento_realizado',
    'desvio'
  ];

  @Input() rows: Atendimento[] = [];
  clickedRows = new Set<Atendimento>();
  @Output() selected = new EventEmitter<Atendimento>();

  selectRow(row: Atendimento) {
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }

    this.selected.emit(row);
  }

  constructor() {}

  ngOnInit() {}
}
