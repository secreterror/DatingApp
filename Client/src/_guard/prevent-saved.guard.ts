import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from 'src/app/members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventSavedGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: MemberEditComponent):boolean  {

      if(component.editForm.dirty){
        return confirm('are you sure');
      }
      return true;

    
  }
  
}
