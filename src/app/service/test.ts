import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class TestService {

    private httpClient = inject(HttpClient);

    getData() {
        let productId = 5;
        let urlPath = 'https://dummyjson.com/products/add';

        let headers = new HttpHeaders({
            Authorization: 'Bearer XYZTOken',
            ContentType:'application/json2'
        });

        let bodyVariable = { id: 5 };

        this.httpClient.post(urlPath, bodyVariable, { headers }).subscribe(
            (response) => {
                console.log(response);
            }
        );
    }
}