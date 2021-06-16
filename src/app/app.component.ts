import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'PENNY FE DEV TEST';
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    setTimeout(() => (this.loading = false), this.randomInt(4, 8) * 1000);
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
