import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorageService } from './storage.service';
import { UserModel } from '../../models/user.model';
import { PermissionModel } from '../../models/permission.model';
import { OrganizationModel } from '../../models/organization.model';

@Injectable()
export class AuthService {

  constructor(private storageService: StorageService, private route: ActivatedRoute,
              private router: Router) {

    this.storageService.userAccountCleared.subscribe({
      next: (exists) => {
        if (!exists) {
          //navigate to login
          this.redirectToAuthenticationPage(this.router.url)
        } else {
          //if on login page, redirect to main
          if (window.location.pathname == '/' || window.location.pathname.length == 0) {
            this.redirectAfterAuthentication();
          }
        }
      }
    })
  }

  get isAuthenticated() {
    //TODO add valid logic here
    return !!this.user;
  }

  set user(model) {
    this.storageService.user = model;
  }

  get user(): UserModel | null {
    return this.storageService.user;
  }

  can(permission: PermissionModel['name'], organizationId: OrganizationModel['id'] | undefined): boolean {
    if (!permission || !this.user?.roles || (!organizationId && !this.user.organizations)) {
      return false;
    }

    if (!organizationId) {
      organizationId = this.user.organizations!.find((org) => org.is_root)?.id;
    }

    return this.user.roles.some((role) => {
      return role.organization_id === organizationId &&
        role.permissions?.some((perm) => perm.name === permission);
    })

  }

  hasAccess(permissions: PermissionModel['name'][], organizationId: OrganizationModel['id']) {
    return permissions.some((permission) => this.can(permission, organizationId));
  }

  redirectToAuthenticationPage(previousPath?: string) {
    this.router.navigateByUrl(`/login?${previousPath ? `src=${previousPath}` : ''}`);
  }

  redirectAfterAuthentication() {
    if (this.route.snapshot.queryParamMap.get('src')) {
      this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('src')!);
    } else {
      this.router.navigateByUrl('/home')
    }
  }
}
