import { AfterViewInit, Component, effect, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HomeService } from './services/home.service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private homeService = inject(HomeService);
  total: number = 0;

  ngOnInit(): void {
    let x = 5;
    let y = 14;
    this.total = this.homeService.sum(x, y);

    console.log(this.homeService.getDataFromLoginPage());
  }

  // ngAfterViewInit(): void {
  //   this.message = 'Rendered';
  // }

}