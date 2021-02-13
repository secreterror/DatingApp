import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/_guard/auth.guard';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { ServererrorComponent } from './error/servererror/servererror.component';
import { TesterrorsComponent } from './error/testerrors/testerrors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
    canActivate:[AuthGuard],
    runGuardsAndResolvers:'always',
    children:[
    {path:'members',component:MemberListComponent},
    {path:'members/:username',component:MemberDetailComponent},
    {path:'lists',component:ListsComponent},
    {path:'message',component:MessagesComponent}
  ]
  },
  {path:'errors',component:TesterrorsComponent},
  {path:'not-found',component:NotfoundComponent},
  {path:'server-error',component:ServererrorComponent}
  ,
  {path:'**',component:NotfoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
