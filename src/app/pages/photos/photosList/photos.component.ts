import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  getImageUrl(imageId) {
    return `https://picsum.photos/100?image=${imageId}`;
  }

  public pageTitle = 'Welcome ';
}
