import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { HistoryComponent } from './history/history.component';
import { RegisterComponent } from './register/register.component';
import { CreateReviewerComponent } from './create-reviewer/create-reviewer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientDocumentsComponent } from './components/documents/client-documents/client-documents.component';
import { ReviewerDocumentsComponent } from './components/documents/reviewer-documents/reviewer-documents.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyDocumentsComponent,
    MyReviewsComponent,
    HistoryComponent,
    RegisterComponent,
    CreateReviewerComponent,
    SidebarComponent,
    ClientDocumentsComponent,
    ReviewerDocumentsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
