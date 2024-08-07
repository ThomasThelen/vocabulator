import { Component } from '@angular/core';


@Component({
  selector: 'app-new-db-connection',
  templateUrl: './new-db-connection.component.html',
  styleUrls: ['./new-db-connection.component.scss']
})
export class NewDbConnectionComponent {
  databases: Array<any> = []
  displayName = ""
  ngOnInit() {
    this.databases = [
      {
        name: 'Neo4j',
        icon: 'images/databases/neo4j.png',
      },
      {
        name: 'Memgraph',
        icon: 'images/databases/memgraph.png',
      },
      {
        name: 'Memgraph2',
        icon: 'images/databases/memgraph.png',
      },
      {
        name: 'Memgraph3',
        icon: 'images/databases/memgraph.png',
      },
      
    ]
  }

  onVendorSelect(vendor: string) {

  }
  
  displayNameUpdate(displayName: string) {
    this.displayName = displayName;
    }
}
