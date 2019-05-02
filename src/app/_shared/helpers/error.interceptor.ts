import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService,
                private toastr: ToastrService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            catchError(
                err => {
                    if ([401, 403, 408, 500].indexOf(err.status) !== -1) {
                        if ( err.status === 408) {
                            this.toastr.error('Request timeout due to poor connection, logging out');
                        }
                        this.authenticationService.logout();
                        location.reload(true);
                    }

                    const error = err.error.message || err.statusText;
                    return throwError(error);
                }
            )
        );
    }
}
