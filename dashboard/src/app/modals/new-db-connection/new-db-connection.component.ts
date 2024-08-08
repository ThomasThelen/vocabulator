import { Component } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new-db-connection',
  templateUrl: './new-db-connection.component.html',
  styleUrls: ['./new-db-connection.component.scss']
})
export class NewDbConnectionComponent {
  databases: Array<any> = []
  displayName = ""
  selectedVendor: string = ""
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  /**
   * Called when the user clicks the 'Add' button.
   * Sends a POST request to add a new database to the selected vendor
   */
  onNewDatabaseAdd() {
    //this.apiService.AddDatabase()
  }
  
  displayNameUpdate(displayName: string) {
    this.displayName = displayName;
    }
}
