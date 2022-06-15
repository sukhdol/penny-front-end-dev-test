import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'PENNY FE DEV TEST';

  constructor(public loader: LoaderService) {
  }

  ngOnInit() {
    this.loader.start();
    setTimeout(() => (this.loader.finish()), this.randomInt(4, 8) * 1000);
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
