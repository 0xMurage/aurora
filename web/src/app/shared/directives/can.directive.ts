import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { OrganizationModel } from '../../models/organization.model';
import { PermissionModel } from '../../models/permission.model';

@Directive({
  selector: '[can]',
  standalone: true
})
export class CanDirective implements OnInit {

  @Input() can?: PermissionModel['name'];
  @Input() organization: OrganizationModel['id'];

  @Input() set canElse(template: TemplateRef<any>) {this.fallback = template};

  private fallback?: TemplateRef<any>

  constructor(private authService: AuthService, private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    if (!this.can) {return}

    if (this.authService.can(this.can, this.organization)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      if (this.fallback) {
        this.viewContainer.createEmbeddedView(this.fallback);
      } else {
        this.viewContainer.clear();
      }
    }
  }
}
