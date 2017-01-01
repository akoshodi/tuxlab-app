import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Roles } from '../../../../collections/users';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

declare var Collections : any;

/**
Guards a route by enforcing that the course exists.
**/

@InjectUser("user")
@Injectable()
export class CourseGuardRecord implements CanActivate{
  user: Meteor.User;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    var slf = this;

    // Get Params
    const course_id : string = (<any>state).parent(route).params.courseid;

    var obs : Observable<boolean> = Observable.fromPromise(new Promise<boolean> (function(resolve, reject){

      Meteor.subscribe('courses', function(){
          var course = Collections.course_records.findOne({user_id: slf.user._id, course_id: course_id});
          if (typeof course_record !== "undefined" && course_record !== null){
            resolve(true);
          }
          else{

          }
      });
    }));

    return obs;
  }
}
