import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmDetailsComponent } from './pages/films/film-details/film-details.component';

import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { FilmsPeopleComponent } from './pages/films/films-people/films-people.component';
import { PipeComponent } from './examples/pipe/pipe.component';
import { InputOutputComponent } from './examples/input-output/input-output.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'films',
    component: FilmsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'films/:id',
    component: FilmDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'films/:id/people',
    component: FilmsPeopleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'photos',
    //canActivate: [AuthGuard],
    //https://app.pluralsight.com/course-player?clipId=40eb0ee9-4330-4e98-af47-c429fd760174
    data: { preload: false },
    loadChildren: () =>
      import('./pages/photos/photos.module').then((m) => m.PhotosModule),
  },
  { path: 'examples/pipe', component: PipeComponent },
  { path: 'examples/inputOutput', component: InputOutputComponent },

  {
    path: 'examples',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./examples/examples.module').then((m) => m.ExamplesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
