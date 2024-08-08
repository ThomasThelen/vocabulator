import { Component, ViewChild } from '@angular/core';
import { DbViewComponent } from '../../views/db-view/db-view.component';
import { NewDbConnectionComponent } from '../../modals/new-db-connection/new-db-connection.component';
import { NewVendorComponent } from '../../modals/new-vendor/new-vendor.component';
import { MatDialog } from '@angular/material/dialog'; 
import { ActivatedRoute } from '@angular/router';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent {

  title = 'Vocabulator';
  selectedDatabase: string = "";
  selectedVendor: number = 0
  databaseInformation = {
    vendorId: 0,
    databaseName: ''
  }
  vendors: Array<any> = []
  @ViewChild(DbViewComponent)
  private dbViewComponent: any;

  expandedIndex = 0;
  constructor(private apiService: VendorService, private dialog: MatDialog, private route: ActivatedRoute) {}
  
  ngOnInit() {
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

  onVendorSelect(vendor: number) {
    console.log("Vendor selected: " + vendor)
    this.selectedVendor = vendor;
  }

  onDatabaseSelect(databaseName: string) {
    console.log("Database selected", databaseName)
    this.selectedDatabase = databaseName;
    this.databaseInformation = {
      vendorId: this.selectedVendor,
      databaseName: this.selectedDatabase
    }
    this.dbViewComponent.update(this.databaseInformation)
  }

  onDatabaseSettingsSelect(databaseName: string) {
    console.log("Database settings selected", databaseName)
  }

  onNewDatabase() {
    console.log("New database selected")
    let dialogRef = this.dialog.open(NewDbConnectionComponent,
      {
      data: {vendorId: this.selectedVendor},
      height: '400px',
      width: '600px',
    });
  }

  onNewVendor () {
    let dialogRef = this.dialog.open(NewVendorComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
