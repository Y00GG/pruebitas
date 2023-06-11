import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { HistoryComponent } from './history/history.component';
import { CreateReviewerComponent } from './create-reviewer/create-reviewer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'my-documents',
    component: MyDocumentsComponent
  },
  {
    path: 'my-reviews',
    component: MyReviewsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'create-reviewer',
    component: CreateReviewerComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
