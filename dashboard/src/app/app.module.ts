import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDbConnectionComponent } from './modals/new-db-connection/new-db-connection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatFormField } from "@angular/material/form-field";
import {MatExpansionModule} from '@angular/material/expansion'; 
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from  '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DbViewComponent } from './views/db-view/db-view.component'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule } from '@angular/forms';
import { NewVendorComponent } from './modals/new-vendor/new-vendor.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import { NewProjectComponent } from './modals/new-project/new-project.component';
import { ProjectViewComponent } from './views/project-view/project-view.component'; 
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { ProjectSelectionViewComponent } from './views/project-selection-view/project-selection-view.component';
import { EditProjectModalComponent } from './modals/edit-project-modal/edit-project-modal.component';

const appRoutes: Routes = [
  {path: '', component: ProjectSelectionViewComponent},
  {path: 'project', component: ProjectSelectionViewComponent},
  {path: 'project/:id', component: ProjectViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NewDbConnectionComponent,
    FooterComponent,
    HeaderComponent,
    DbViewComponent,
    NewVendorComponent,
    NewProjectComponent,
    ProjectViewComponent,
    ProjectSelectionViewComponent,
    EditProjectModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatTooltipModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [provideRouter(appRoutes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
