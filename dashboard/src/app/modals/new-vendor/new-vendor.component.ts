import { Component } from '@angular/core';

@Component({
  selector: 'app-new-vendor',
  templateUrl: './new-vendor.component.html',
  styleUrls: ['./new-vendor.component.scss']
})
export class NewVendorComponent {
  vendors = [
    {
      name: 'Neo4j',
      icon: '/assets/vendors/neo4j.png'
    },
    {
      name: 'Memgraph',
      icon: '/assets/vendors/memgraph.png'
    }
    
  ]
}
