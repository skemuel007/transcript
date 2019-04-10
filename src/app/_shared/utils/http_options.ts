import {HttpHeaders} from '@angular/common/http';

export class HttpOptions {
    static getHttpOptions() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return httpOptions;
    }
}
