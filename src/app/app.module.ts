import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ApiService } from 'src/lib/services/api.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonTileComponent } from './dashboard/person-tile/person-tile.component';
import { EmptyContentComponent } from './dashboard/widget/empty-content/empty-content.component';
import { WidgetComponent } from './dashboard/widget/widget.component';
import { RsvpItemComponent } from './dashboard/rsvp-item/rsvp-item.component';
import { LoadingSpinnerComponent } from './dashboard/widget/loading-spinner/loading-spinner.component';
import { AgendaComponent } from './dashboard/agenda/agenda.component';
import { SplashComponent } from './splash/splash.component';
import { StatusComponent } from './status/status.component';
import { NgChartsModule } from 'ng2-charts';
import { TagComponent } from './dashboard/agenda/tag/tag.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonTileComponent,
    WidgetComponent,
    EmptyContentComponent,
    RsvpItemComponent,
    LoadingSpinnerComponent,
    AgendaComponent,
    SplashComponent,
    StatusComponent,
    TagComponent
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
    MatProgressBarModule,
    HttpClientModule,
    NgChartsModule,
    CommonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
