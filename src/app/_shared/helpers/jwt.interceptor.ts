import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if ( currentUser && currentUser.token ) {

            req = req.clone({
                setHeaders: {
                    Authorization: `bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(req);
    }
}
