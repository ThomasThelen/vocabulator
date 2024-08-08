import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../../modals/new-project/new-project.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { EditProjectModalComponent } from 'src/app/modals/edit-project-modal/edit-project-modal.component';

@Component({
  selector: 'app-project-selection-view',
  templateUrl: './project-selection-view.component.html',
  styleUrls: ['./project-selection-view.component.scss']
})
export class ProjectSelectionViewComponent {
  projects: Array<any> = []

  constructor(private apiService: ProjectService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.getProjects()
  }

  getProjects() {
    this.apiService.GetProjects().subscribe(
      (response) => {
        this.projects = response
        },
      (error) => {
        console.log(error)
         console.log("Failed to get projects", error)
        });
  }

  /**
   * Handles transitioning the view to show the project that was clicked on
   */
  onProjectSelected(projectId: number) {
    console.log(projectId)
    this.router.navigate([`/project/${projectId}`], { relativeTo: this.route });
  }

  /**
   * Called when the user clicks the "New Project card". Launches the
   * modal dialog to create a new project.
   */
  onNewProjectSelected() {
    let modal = this.dialog.open(NewProjectComponent, {
      height: '400px',
      width: '600px',
    });

    modal.afterClosed().subscribe(data => {
      this.getProjects()
    })
    
  }

  /**
   * Called when the user clicks the 'delete' icon on the project card. Sends a request to delete
   * the project.
   * 
   * @param projectId The id of the project being deleted
   */
  onProjectDelete(projectId: number) {
    this.apiService.deleteProject(projectId).subscribe(
      (response) => {
        // Re-fetch the project list
        this.getProjects()
        },
      (error) => {
        console.log(error)
         alert(`Failed to delete project! ${error}`)
        });
  }

  onUpdateProject(projectId: number, projectName: string) {
    let dialogRef = this.dialog.open(EditProjectModalComponent, {
      height: '400px',
      width: '600px',
      data: {projectId, projectName},
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getProjects()
    })
    
  }
}
