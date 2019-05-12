import {throwError as observableThrowError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import { HttpEvent } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';

@Injectable()
export class RestService {
    private headers: HttpHeaders;
    private options: RequestOptions;

    constructor(private http: HttpClient) {
        this.headers = this.getHeaders();
    }

    getHeaders() {
        return new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Accept-Language', 'EN')
            .set('Cache-Control', 'no-cache')
            .set('Pragma', 'no-cache')
            .set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
    }

    optionsByUrl(url: string) {
        return this.http.request(new HttpRequest('OPTIONS', url, { headers: this.getHeaders(), reportProgress: false })).pipe(
            map((event: HttpEvent<any>) => {
                if (event.type === HttpEventType.Response) {
                    return event.body;
                }
            }),
            catchError(this.handleError),);
    }

    getByUrl(url: string, headers?: HttpHeaders) {
        return this.http.get(url, { headers: headers || this.getHeaders() }).pipe(catchError(this.handleError));
    }

    getByUrlWithoutOptions(url: string) {
        return this.http.get(url).pipe(catchError(this.handleError));
    }

    getByUrlWithoutParsingToJson(url: string) {
        const getHeaders = new HttpHeaders({
            'X-CSC-User-Id': localStorage.getItem('userId')
        });

        return this.http.get(url, { headers: getHeaders, responseType: 'blob' }).pipe(catchError(this.handleError));
    }
    
    getPDFByUrlWithoutParsingToJson(url: string) {
        const headers = new HttpHeaders()
        .set('Accept', 'application/pdf')
        .set('Accept-Language', 'EN')

        return this.http.get(url, { headers: headers , responseType: 'blob' }).catch(this.handleError);
    }

    patchByUrl(url: string, obj: Object, removeEmpty = false) {
        const body = JSON.stringify(this.removeRootElement({ obj }, removeEmpty));
        return this.http.patch(url, body, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
    }

    putByUrl(url: string, obj: Object, headers?: HttpHeaders, removeEmpty = false) {
        const body = JSON.stringify(this.removeRootElement({ obj }, removeEmpty));
        return this.http.put(url, body, { headers: headers || this.getHeaders() }).pipe(catchError(this.handleError));
    }

    postByUrl(url: string, obj: Object, headers?: HttpHeaders, removeEmpty = false) {
        const body = JSON.stringify(this.removeRootElement({ obj }, removeEmpty));
        return this.http.post(url, body, { headers: headers || this.getHeaders() }).pipe(catchError(this.handleError));
    }

    postByUrlWithoutOptions(url: string, obj: Object, removeEmpty = false) {
        const body = JSON.stringify(this.removeRootElement({ obj }, removeEmpty));
        return this.http.post(url, body).pipe(catchError(this.handleError));
    }

    postByUrlWithoutParsingToJson(url: string, obj: Object, removeEmpty = false) {
        const body = JSON.stringify(this.removeRootElement({ obj }, removeEmpty));
        return this.http.post(url, body, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
    }
    
    deleteByUrl(url: string, headers?: HttpHeaders, removeEmpty = false) {
        return this.http.delete(url, { headers: headers || this.getHeaders() }).pipe(catchError(this.handleError));
    }

    private handleError(error: Response | any) {
        return observableThrowError(error);
    }

    removeRootElement(obj, removeEmpty: boolean) {
        var numKeys = 0,
            rootKey;

        for (var item in obj) {
            if (!obj.hasOwnProperty(item)) continue;
            rootKey = item;
            numKeys++;
            if (numKeys === 2) { break; }
        }

        if (numKeys === 1) {
            var newObj = {},
                rootObj = obj[rootKey];

            if (typeof rootObj === 'object') {
                for (var key in rootObj) {
                    if (rootObj.hasOwnProperty(key)) {
                        if (removeEmpty && rootObj[key] !== undefined && rootObj[key] !== '') {
                            if (typeof rootObj[key] === 'object') {
                                newObj[key] = this.removeRootElement(rootObj[key], false);
                            } else {
                                newObj[key] = rootObj[key];
                            }

                        } else if (!removeEmpty) {
                            newObj[key] = rootObj[key];
                        }
                    }
                }
                return newObj;
            }
        }
        return obj;
    }
}
