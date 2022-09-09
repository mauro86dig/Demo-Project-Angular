import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photosList/photos.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { ModalContainerComponent } from './modal-container.component';

import { SharedModule } from '../../shared/shared.module';
const photosRoutes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    data: { title: 'Photos List' },
  },
  { path: ':id', component: ModalContainerComponent },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(photosRoutes)],
  declarations: [
    PhotosComponent,
    PhotoDetailComponent,
    ModalContainerComponent,
  ],
})
export class PhotosModule {}
