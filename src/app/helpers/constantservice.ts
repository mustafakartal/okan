import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConstantService {
    apiUrl = 'http://localhost:52446/api/';

    constructor() { }
}