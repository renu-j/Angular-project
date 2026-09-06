import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../service/test';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private testService = inject(TestService);

  ngOnInit(): void {
    // let data = this.router.lastSuccessfulNavigation()?.extras?.state?.['data'];

    // this.activatedRoute.queryParams.subscribe(
    //   (queryParams) => {
    //     console.log(JSON.parse(queryParams['data']));
    //   }
    // );

    // console.log(data);

    this.testService.getData();
  }

}