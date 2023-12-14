import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator', {static: true}) paginator!: MatPaginator;
  ELEMENT_DATA = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo halo halo halo halo halo halao every body'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', name_two: 'halo halo halo halo halo halo halao every body', name_three: 'halo halo halo halo halo halo halao every body', name_four: 'halo halo halo halo halo halo halao every body', name_five: 'halo'},
  ];
  
  displayedColumns: string[] = [];
  dataSource : any;

  constructor() {}

  ngOnInit():void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'name_two','name_three','name_four','name_five'];
    // this.dataSource = this.ELEMENT_DATA;
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  name_two: string;
  name_three: string;
  name_four: string;
  name_five: string;
}
