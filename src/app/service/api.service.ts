import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Service()
export class ApiService {

    private httpClient = inject(HttpClient);
    baseUrl = environment.baseURL;

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

    isContactAllowed() {
        return 5 != 5;
    }
}