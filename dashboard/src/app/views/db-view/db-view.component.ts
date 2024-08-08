import { Component } from '@angular/core';

@Component({
  selector: 'app-db-view',
  templateUrl: './db-view.component.html',
  styleUrls: ['./db-view.component.scss']
})
export class DbViewComponent {
  databaseInformation = {
    vendorName: 0,
    databaseName: ''
  }
  nodeData: any = []
  displayedColumns: string[] = ['name', 'description', 'tags'];

  constructor() {
    console.log(this.databaseInformation.vendorName);
  }

  update(databaseInformation: any) {
    this.databaseInformation = databaseInformation
    console.log(this.databaseInformation)
    if (this.databaseInformation.vendorName == 0 && this.databaseInformation.databaseName == 'millitant_db') {
      console.log("asd")
      this.nodeData = [
        {name: 'Person', description: "Represents a person involved in a terrorist attack. May be the militant, victim, or commentator.", tags: '[militant]'},
        {name: 'MilitantGroup', description: "The group responsible for a terrorist attack", tags: '[militant]'},
        {name: 'Country', description: "The country in which an attack ocurred.", tags: '[militant, spatial]'},
        {name: 'AttackType', description: "The type of attack that was carried out.", tags: '[militant]'},
      ];
    } else if (this.databaseInformation.vendorName == 0 && this.databaseInformation.databaseName == 'linked_country_test') {
      this.nodeData = [
        {name: 'City', description: "A city that contains features of interest.", tags: '[geospatial]'},
        {name: 'Bridge', description: "A thing cars drive over", tags: '[structure]'},
      ];
    }else {
      this.nodeData = []
    }

  }
  
}
