import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpService } from './services/http.service';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { EnsureImportedOnce } from '../utils/ensure-imported-once';
import { UnauthenticatedInterceptor } from './interceptors/unauthenticated.interceptor';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ]
})
export class CoreModule extends EnsureImportedOnce<CoreModule> {
  constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    //register services that shouldn't be recreated by lazy loaded modules. Interceptors first.
    return {
      ngModule: CoreModule,
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: UnauthenticatedInterceptor,
        multi: true
      },
        HttpService,AuthService, StorageService
      ]
    }
  }
}

