import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface HTTPOptions {
  headers?: HttpHeaders | { [ p: string ]: string | string[] };
  context?: HttpContext;
  params?: HttpParams |
    { [ param: string ]: string | number | boolean | ReadonlyArray<string | number | boolean> };
  reportProgress?: boolean;
  withCredentials?: boolean;
  observe?: 'body' | 'events' | 'response';
  responseType?: 'json' | 'arraybuffer' | 'blob' | 'text';
}
