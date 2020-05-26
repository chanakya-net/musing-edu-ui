import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { MatDialog } from '@angular/material/dialog';
import { ManageBuildingComponent } from '../Building/manage-building/manage-building.component';
import { AddNewBuildingComponent } from '../building/add-new-building/add-new-building.component';

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

  openDialog() {
    const dialogRef = this.dialog.open(AddNewBuildingComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

