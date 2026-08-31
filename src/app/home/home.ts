import { Component, effect, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  message: string = '';

  // constructor(
  //   private activatedRoute: ActivatedRoute
  // ) {
  //   this.activatedRoute.queryParams.subscribe(
  //     (params) => {
  //       this.message = params['message'];
  //       console.log(params['message']+' next');
  //     }
  //   );
  // }

  constructor(private router: Router) {
    effect(() => {
      console.log(this.router.lastSuccessfulNavigation()?.extras.state?.['data']);
    });

    
  }
}