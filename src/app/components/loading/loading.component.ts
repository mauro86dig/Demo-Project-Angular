import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  loading: boolean;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      //  console.log(v);
      this.loading = v;
    });
  }

  ngOnInit() { }
}
