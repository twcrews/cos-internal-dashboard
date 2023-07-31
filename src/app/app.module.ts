import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import {
  HttpClientModule
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ApiService } from 'src/lib/services/api.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleGridComponent } from './dashboard/people-grid/people-grid.component';
import { PersonTileComponent } from './dashboard/people-grid/person-tile/person-tile.component';
import { EmptyContentComponent } from './dashboard/widget/empty-content/empty-content.component';
import { WidgetComponent } from './dashboard/widget/widget.component';
import { SecretDialogComponent } from './secret-dialog/secret-dialog.component';
import { RsvpListComponent } from './dashboard/rsvp-list/rsvp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SecretDialogComponent,
    PeopleGridComponent,
    PersonTileComponent,
    WidgetComponent,
    EmptyContentComponent,
    RsvpListComponent,
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
