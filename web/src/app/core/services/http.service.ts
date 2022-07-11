import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HTTPOptions } from '../../models/http.model';
import { environment } from '../../../environments/environment';
import { resourcesEndpoints } from 'src/app/utils/resources-endpoints';

@Injectable()
export class HttpService {
  private _apiVersion = 1;

  constructor(private httpClient: HttpClient) {}

  get apiVersion(): number {
    return this._apiVersion;
  }

  set apiVersion(value: number) {
    this._apiVersion = value;
  }

  get baseUrl(): string {
    const host = (environment as any)[ `apiV${this.apiVersion}` ] .host;
    const namespace = (environment as any) [ `apiV${this.apiVersion}` ].namespace

    return `${host}${namespace}`;
  }

  get endpoint() {
    return resourcesEndpoints;
  }


  /**
   * Get a resource
   * @param uri : request URI
   * @param httpOptions : HTTPOptions such as headers to send with request
   */
  get(uri: string, httpOptions?: HTTPOptions): Observable<any> {
    return this.httpClient.get(this.baseUrl + uri, this.buildHttpOptions(httpOptions));
  }

  /**
   * Create a new resource using POST http method
   * @param uri : a URI for the resource access
   * @param payload  : key ~value pair of the data
   * @param httpOptions : HTTPOptions options such as headers to send with request
   */
  post(uri: string, payload: object, httpOptions?: HTTPOptions): Observable<any> {
    return this.httpClient.post(this.baseUrl + uri, payload, this.buildHttpOptions(httpOptions));
  }

  /**
   * Update a resource partially using PATCH http method
   * @param uri :the URI to the resource
   * @param payload : key ~ value pair data to update with
   * @param httpOptions : options such as headers
   */
  patch(uri: string, payload: object, httpOptions?: HTTPOptions): Observable<any> {
    return this.httpClient.patch(this.baseUrl + uri, payload, this.buildHttpOptions(httpOptions));
  }

  /**
   * Updating the whole record completely using PUT http method
   * @param uri :the uri to the resource
   * @param payload : key ~ value pair data to replace with
   * @param httpOptions : options such as request header
   */
  put(uri: string, payload: object, httpOptions?: HTTPOptions): Observable<any> {

    return this.httpClient.put(this.baseUrl + uri, payload, this.buildHttpOptions(httpOptions));
  }

  /**
   *  Delete http resource
   * @param  uri: URI to the resource
   * @param httpOptions: http request options
   */
  destroy(uri: string, httpOptions?: HTTPOptions): Observable<any> {

    return this.httpClient.delete(this.baseUrl + uri, this.buildHttpOptions(httpOptions));
  }

  downloadFile(uri: string, httpOptions?: HTTPOptions): Observable<any> {
    return this.httpClient.get(this.baseUrl + uri, this.buildHttpOptions({
      headers: {'Content-Type': 'application/json', Accept: 'blob',},
      responseType: 'blob', ...httpOptions
    }));

  }


  /**
   * Build HTTP request options
   *
   */
  private buildHttpOptions = (options?: HTTPOptions): object => {

    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };


    let obj: HTTPOptions = {
      headers: headers,
      params: {},
      withCredentials: true,
      responseType: 'json'
    };

    if (options) {
      obj = {...obj, ...options}
    }

    return obj;
  };

}
