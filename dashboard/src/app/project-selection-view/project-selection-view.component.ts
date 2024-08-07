import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-selection-view',
  templateUrl: './project-selection-view.component.html',
  styleUrls: ['./project-selection-view.component.scss']
})
export class ProjectSelectionViewComponent {
  projects: Array<any> = []

  constructor(private apiService: ApiService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
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

  randomBackground() {
    let backgrounds = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
    let randomItem = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    console.log('/assets/project-backgrounds/'+randomItem)
    return '/assets/project-backgrounds/'+randomItem
  }

  onNewProjectSelected() {
    let dialogRef = this.dialog.open(NewProjectComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
