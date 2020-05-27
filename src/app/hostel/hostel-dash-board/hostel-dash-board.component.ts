import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { MatDialog } from '@angular/material/dialog';
import { AddNewBuildingComponent } from '../building/add-new-building/add-new-building.component';
import { AddNewRoomComponent } from '../room/add-new-room/add-new-room.component';
import { AddNewBedComponent } from '../bed/add-new-bed/add-new-bed.component';
import { SetupHostelComponent } from '../setup-hostel/setup-hostel.component';

@Component({
  selector: 'app-hostel-dash-board',
  templateUrl: './hostel-dash-board.component.html',
  styleUrls: ['./hostel-dash-board.component.scss']
})
export class HostelDashBoardComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false

  };
  public barChartLabels: Label[] = ['Hostel 1', 'Hostel 2', 'Hostel 3', 'Hostel 4', 'Hostel 5', 'Hostel 6', 'Hostel 7'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Occupied Beds' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Free Beds' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AddBuilding() {
    const dialogRef = this.dialog.open(AddNewBuildingComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  AddRoom() {
    const dialogRef = this.dialog.open(AddNewRoomComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  AddBed() {
    const dialogRef = this.dialog.open(AddNewBedComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  HostelSetup() {
    const dialogRef = this.dialog.open(SetupHostelComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

