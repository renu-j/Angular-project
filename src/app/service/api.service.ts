import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ApiService {

    private httpClient = inject(HttpClient);
    baseUrl = 'https://dummyjson.com';

    headers = new HttpHeaders({
        Authorization: 'Bearer XYZTOken',
        ContentType: 'application/json'
    });

    getAllProducts(): Observable<any> {
        const url = this.baseUrl + '/products';
        return this.httpClient.get(url, { headers: this.headers, observe: 'response' });
    }

    getProductById(productId: number): Observable<any> {
        const url = this.baseUrl + '/products/' + productId;

        return this.httpClient.get(url, { headers: this.headers });
    }
}
