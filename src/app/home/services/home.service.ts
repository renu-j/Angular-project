import { Service } from '@angular/core';

@Service()
export class HomeService {

    sum(a: number, b: number): number {
        return a + b;
    }

    getDataFromLoginPage(): string {
        // Api call logic
        let data = 'Data from backend';

        return data;
    }
}