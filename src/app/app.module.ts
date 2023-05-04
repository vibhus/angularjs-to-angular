import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{UpgradeModule} from "@angular/upgrade/static";
import * as angular from 'angular';
import { AngularComponentComponent } from './angular-component/angular-component.component';
import { AngularjsWrapperComponentComponent } from './angularjs-wrapper-component/angularjs-wrapper-component.component';

const ng1module = angular.module('ng1module', []);
ng1module.component('ng1component', {
  template: '<h1>ng1 component</h1>'
});
angular.module('ng1module').service('ng1service', function() {
  return {
    sayHello: function() {
      console.log('hello from ng1 service');
    }
  }
});
angular.module('ng1module').controller('ng1controller', ['$scope', function($scope) {
  $scope.message = 'hello from ng1 controller';
}]);
angular.module('ng1module').directive('ng1directive', ['ng1service', function(ng1service) {
  return {
    template: '<h1>ng1 directive</h1>' +
      '<div ng-controller="ng1controller">' +
      'content with controller {{message}}' +
      '</div>',
    restrict: 'E',
    link: {
      pre: function(scope, element, attrs) {
        console.log('ng1directive pre link');
        ng1service.sayHello();
      },
      post: function(scope, element, attrs) {
        console.log('ng1directive post link');
      }
    }
  };
}]);
@NgModule({
  declarations: [
    AppComponent,
    AngularComponentComponent,
    AngularjsWrapperComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [ng1module.name], { strictDi: true });
  }
}
