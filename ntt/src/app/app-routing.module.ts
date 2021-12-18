import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpostComponent } from './main/detailpost/detailpost.component';
import { DetailprofileComponent } from './main/detailprofile/detailprofile.component';
import { LoginComponent } from './main/login/login.component';
import { ProfileComponent } from './main/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'detailprofile',
    component: DetailprofileComponent
  },
  {
    path: 'detailpost/:id',
    component: DetailpostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
