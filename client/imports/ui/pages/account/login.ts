/* TuxLab - TuxLab.ts */

// Meteor Imports
  import { Meteor } from 'meteor/meteor';
  import { Mongo } from 'meteor/mongo';
  import 'reflect-metadata';
  import 'zone.js/dist/zone';

// Angular Imports
  import { Component } from '@angular/core';

  import { APP_BASE_HREF } from '@angular/common';
  import { HTTP_PROVIDERS } from '@angular/http';
  import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';

  import { LoginButtons } from 'angular2-meteor-accounts-ui'

// Angular Material Imports
  import { MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES } from 'ng2-material';
  import { MeteorComponent } from 'angular2-meteor';

  // Icon
  import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon'


// Define TuxLab Component
  @Component({
    selector: 'tuxlab-login',
    templateUrl: '/client/imports/ui/pages/account/login.html',
    directives:
    [LoginButtons,
     MD_ICON_DIRECTIVES
    ]
  })

export class Login extends MeteorComponent {
  user: Meteor.User;

  constructor() {
    super();
  }

  login(){
    Meteor.loginWithGoogle({
    });
  }

}
