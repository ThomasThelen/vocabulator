import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { Vendor } from '../models/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient: HttpClient) { }

  baseVendorUrl: string = "http://localhost:8080"

  /**
   * Gets all the vendors that the system supports
   * 
   * @returns A list of 'Vendor' objects
   */
  GetDefaultVendors(){
    return this.httpClient.get<[Vendor]>(`${this.baseVendorUrl}/vendor`);
  }

  /**
   * Gets all the vendors that are currently in use
   * @param projectId The project being queried
   * @returns A list of 'Vendor' objects
   */
  GetVendors(projectId: number) {
    return this.httpClient.get<[Vendor]>(`${this.baseVendorUrl}/vendor/${projectId}/current`);
  }

  /**
   * Adds a vendor to 'in use'
   * 
   * @param vendor_id The ID of the vendor being used
   * @returns Boolean whether the vendor was added
   */
  AddCurrentVendor(vendor_id: string) {
    console.log("Adding new vendor to in use")
    return true
  }

  /**
   * Adds a database to a vendor
   * 
   * @param databaseName The name of the database being added
   * @param vendorId The ID of the vendor that the database belongs to
   */
  AddDatabase(databaseName: string, vendorId: number) {
    
  }
}
