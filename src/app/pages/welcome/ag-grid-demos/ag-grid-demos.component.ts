import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';




interface IOlympicData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}


@Component({
  selector: 'app-ag-grid-demos',
  templateUrl: './ag-grid-demos.component.html',
  styleUrls: ['./ag-grid-demos.component.scss'],
})
export class AgGridDemosComponent implements OnInit {
  ngOnInit(): void {}

  // section 1 
  // // Each Column Definition results in one Column.
  // public columnDefs: ColDef[] = [
  //   { field: 'make' },
  //   { field: 'model' },
  //   { field: 'price' },
  // ];
  // // DefaultColDef sets props common to all Columns
  // public defaultColDef: ColDef = {
  //   sortable: true,
  //   filter: true,
  // };
  // // Data that gets displayed in the grid
  // public rowData$!: Observable<any[]>;
  // // For accessing the Grid's API
  // @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  // constructor(private http: HttpClient) {}
  // // Example load data from sever
  // onGridReady(params: GridReadyEvent) {
  //   this.rowData$ = this.http.get<any[]>(
  //     'https://www.ag-grid.com/example-assets/row-data.json'
  //   );
  // }
  // // Example of consuming Grid Event
  // onCellClicked(e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }
  // // Example using Grid's API
  // clearSelection(): void {
  //   this.agGrid.api.deselectAll();
  // }
  // end of section 1




  // section 2 

  public columnDefs: ColDef[] = [
    { field: 'athlete', sort: 'desc' },
    { field: 'age', width: 90 },
    { field: 'country' },
    { field: 'year', width: 90, unSortIcon: true },
    { field: 'date', comparator: dateComparator },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    width: 170,
    sortable: true,
  };
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
}

function dateComparator(date1: string, date2: string) {
  const date1Number = monthToComparableNumber(date1);
  const date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
}
// eg 29/08/2004 gets converted to 20040829
function monthToComparableNumber(date: string) {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }
  const yearNumber = Number.parseInt(date.substring(6, 10));
  const monthNumber = Number.parseInt(date.substring(3, 5));
  const dayNumber = Number.parseInt(date.substring(0, 2));
  return yearNumber * 10000 + monthNumber * 100 + dayNumber;

  // end of section 2
}
