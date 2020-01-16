import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/authservice';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ProjectlistComponent } from './modules/projects/projectlist/projectlist.component';
import { ProjectaddComponent } from './modules/projects/projectadd/projectadd.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'projeler', component: ProjectlistComponent, canActivate: [AuthGuard] },
  { path: 'projeler/yeni', component: ProjectaddComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
