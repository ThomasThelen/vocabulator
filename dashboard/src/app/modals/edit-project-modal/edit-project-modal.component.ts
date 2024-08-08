import { Component, Inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.scss']
})
export class EditProjectModalComponent {
  projectName: string = ""
  projectDescription: string = ""

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ProjectService, ) {}


  /**
   * Called when the user attempts to create the new project
   * 
   * @param name The name of the new project
   */
  onSubmit() {
    this.apiService.UpdateProject(this.data.projectId, this.projectName).subscribe(
      (response) => {
        // Re-fetch the project list
        return 1
        },
      (error) => {
        console.log(error)
         alert(`Failed to update the project: ${error}`)
        });
  }
}
