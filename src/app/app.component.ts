import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AgGridAngular) agGridApi!: AgGridAngular;
  title = 'ag-grid-app';
  rowData: any[] = [
    { Brand: 'Tata', Color: 'White', Model: 'SX', Price: '10L' },
    { Brand: 'Mahindra', Color: 'White', Model: 'SX', Price: '10L' },
    { Brand: 'Hyundai', Color: 'White', Model: 'SX', Price: '10L' },
    { Brand: 'Scoda', Color: 'White', Model: 'SX', Price: '10L' },
    { Brand: 'Tesla', Color: 'White', Model: 'SX', Price: '10L' },
    { Brand: 'MG', Color: 'White', Model: 'SX', Price: '10L' },
    { Brand: 'Maruti', Color: 'White', Model: 'SX', Price: '10L' },
    { Brand: 'Toyota', Color: 'White', Model: 'SX', Price: '10L' },
    { Brand: 'Nissan', Color: 'White', Model: 'SX', Price: '10L' }
  ];
  colDef: ColDef[] = [
    { field: 'Brand'},
    { field: 'Color'},
    { field: 'Model'},
    { field: 'Price'}
  ];
  defaultAgGridColDef: ColDef = {
    sortable: true, filter: true
  }

  onCelClickEvent(event: CellClickedEvent){
    console.log(event)
  }
  clearSelection(){
    this.agGridApi.api.deselectAll();
  }
}
