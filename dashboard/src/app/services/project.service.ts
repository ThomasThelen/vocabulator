import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';

import {Project} from '../models/project'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseVendorUrl: string = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets all the vendors that the system supports
   * 
   * @returns A list of 'Vendor' objects
   */
  GetProjects(){
    return this.httpClient.get<[Project]>(`${this.baseVendorUrl}/project`);
  }

  /**
   * Gets information about a single project
   * 
   * @returns 
   */
  GetProject(id: number){
    return this.httpClient.get<[Project]>(`{this.defaultVendorsUrl}/project/${id}`);
  }

  /**
   * Updates a project
   * 
   * @param projectId The id of the project being updated
   */
  UpdateProject(projectId: number, name: string) {
    const queryConfig = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.httpClient.patch<[Project]>(`${this.baseVendorUrl}/project/${projectId}`, {name: name, image: "1.png"}, queryConfig);
  }

  /**
   * 
   * @param name The name of the project being created
   */
  CreateProject(name: string) {
    const queryConfig = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.httpClient.post<[Project]>(`${this.baseVendorUrl}/project`, {name: name, image: "1.png"}, queryConfig);
  }

  /**
   * Deletes a project
   * 
   * @param project_id Id of the project being deleted
   * @returns 
   */
  deleteProject(project_id: number) {
    return this.httpClient.delete<[Project]>(`${this.baseVendorUrl}/project/${project_id}`,);
  }

}