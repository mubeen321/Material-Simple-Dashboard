import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SelectHeaderComponent } from './select-header/select-header.component';
import { MatFormFieldModule } from '@angular/material/form-field'; // Add this import
import { MatSelectModule } from '@angular/material/select'; // Add this import
import { MatInputModule } from '@angular/material/input'; // Add this import
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardLeftComponent } from './dashboard-left/dashboard-left.component';
import { DashboardRightComponent } from './dashboard-right/dashboard-right.component';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { BoxesComponent } from './boxes/boxes.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    SelectHeaderComponent,
    DashboardLeftComponent,
    DashboardRightComponent,
    TableComponent,
    BoxesComponent,
    SimpleTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
