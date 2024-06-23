import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrerislasAboutComponent } from './librerislas-about/librerislas-about.component';
import { LibrerislasIndexComponent } from './librerislas-index/librerislas-index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'librerislas-index',
    pathMatch: 'full'
  },
  {
    path: 'librerislas-index',
    component: LibrerislasIndexComponent
  },
  {
    path: 'about',
    component: LibrerislasAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
