import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {
  projectName: string = ""
  projectDescription: string = ""

  constructor(private projectService: ProjectService) {}


  /**
   * Called when the user attempts to create the new project
   * 
   * @param name The name of the new project
   */
  onSubmit() {
    this.projectService.CreateProject(this.projectName).subscribe(
      (response) => {
        // Re-fetch the project list
        return 1
        },
      (error) => {
        console.log(error)
         console.log("Failed to delete project", error)
        });
  }
}
