import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ActionListComponent } from './action-list/action-list.component';
import { MembersComponent } from './members/members.component';
import { ViewActionsComponent } from './view-actions/view-actions.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'actions', component: ViewActionsComponent },
  { path: 'member', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
