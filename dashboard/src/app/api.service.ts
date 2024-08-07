import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { Vendor } from './vendor';
import {Project} from './project'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  base_vendor_url: string = "http://localhost:8080"
  allProjectsUrl: string = `${this.base_vendor_url}/project`
  defaultVendorsUrl: string = `${this.base_vendor_url}/vendor/default`
  currentVendorsUrl: string = `${this.base_vendor_url}/vendor/current`
  newCurrentVendorUrl: string = `${this.base_vendor_url}/vendor/current`

  /**
   * Gets all the vendors that the system supports
   * 
   * @returns A list of 'Vendor' objects
   */
    GetProjects(){
      return this.httpClient.get<[Project]>(this.allProjectsUrl);
    }

    /**
   * Gets information about a single project
   * 
   * @returns 
   */
    GetProject(id: number){
      let params = new HttpParams().set('id', id);
      return this.httpClient.get<[Project]>(this.defaultVendorsUrl, {params: params});
    }

  /**
   * Gets all the vendors that the system supports
   * 
   * @returns A list of 'Vendor' objects
   */
  GetDefaultVendors(){
    return this.httpClient.get<[Vendor]>(this.defaultVendorsUrl);
  }

  /**
   * Gets all the vendors that are currently in use
   * @param projectId The project being queried
   * @returns A list of 'Vendor' objects
   */
  GetVendors(projectId: number) {
    return this.httpClient.get<[Vendor]>(`${this.base_vendor_url}/vendor/${projectId}/current`);
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
}
