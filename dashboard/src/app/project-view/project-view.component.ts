import { Component, inject, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { DbViewComponent } from '../db-view/db-view.component';
import { NewDbConnectionComponent } from '../new-db-connection/new-db-connection.component';
import { NewVendorComponent } from '../new-vendor/new-vendor.component';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent {

  title = 'KGView';
  selectedDatabase: string = "";
  selectedVendor: string = "";
  databaseInformation = {
    vendorName: '',
    databaseName: ''
  }
  vendors: Array<any> = []
  @ViewChild(DbViewComponent)
  private dbViewComponent: any;

  expandedIndex = 0;
  constructor(private apiService: ApiService, private dialog: MatDialog, private route: ActivatedRoute) {}
  
  ngOnInit() {
    console.log("Getting vendor information")
    let projectId = this.route.snapshot.paramMap.get('id');
    this.apiService.GetVendors(Number(projectId)).subscribe(
      (response) => {
         console.log("Got Current Vendor Response", response)
         this.vendors = response
        },
      (error) => {
        console.log(error)
         console.log("Failed to get current vendors", error)
        });
  }

  onVendorSelect(vendor: string) {
    console.log("Vendor selected: " + vendor)
    this.selectedVendor = vendor;
  }

  onDatabaseSelect(databaseName: string) {
    console.log("Database selected", databaseName)
    this.selectedDatabase = databaseName;
    this.databaseInformation = {
      vendorName: this.selectedVendor,
      databaseName: this.selectedDatabase
    }
    this.dbViewComponent.update(this.databaseInformation)
  }

  onDatabaseSettingsSelect(databaseName: string) {
    console.log("Database settings selected", databaseName)
  }

  onNewDatabase() {
    console.log("New database selected")
    let dialogRef = this.dialog.open(NewDbConnectionComponent, {
      height: '400px',
      width: '600px',
    });
  }

  onNewVendor () {
    console.log("asd")
    let dialogRef = this.dialog.open(NewVendorComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
