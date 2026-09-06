import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private apiService = inject(ApiService);
  productId: number = 5;

  getAllProducts() {
    this.apiService.getAllProducts().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
  getProductId(productId: number) {
    this.apiService.getProductById(productId).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}