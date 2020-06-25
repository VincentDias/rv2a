import { PatientService } from './../../../../shared/patient.service';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  lastname: string;
  active: boolean;
}
/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private patientService: PatientService) { }

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'details'];
  dataSource;
  patients;

  ngOnInit(): void {
    this.patients = this.patientService.getPatients().subscribe(data => {
      this.dataSource = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
