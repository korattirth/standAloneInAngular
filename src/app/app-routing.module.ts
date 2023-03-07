import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './form/dynamic-form/dynamic-form.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserlistComponent } from './user/userlist/userlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'userlist' },
  { path: 'userlist', component: UserlistComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
