import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConstantService } from 'src/app/helpers/constantservice';

@Injectable({ providedIn: 'root' })
export class HomeService {
    private apiUrl = '';
    constructor(private http: HttpClient, private constantService: ConstantService) {
        this.apiUrl = this.constantService.apiUrl;
    }

    getDetail() {
        return this.http.get<any>(this.apiUrl + 'project/detail?model=881d2b30-fde6-4ea4-bffc-1278402f7009')
            .pipe(map((response: any) => {
                console.log(response);
            }));
    }
}