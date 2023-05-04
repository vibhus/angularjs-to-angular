import {Component, ElementRef, OnInit} from '@angular/core';
import * as angular from 'angular';

import {UpgradeModule} from "@angular/upgrade/static";

@Component({
  selector: 'app-angularjs-wrapper-component',
  templateUrl: './angularjs-wrapper-component.component.html',
  styleUrls: ['./angularjs-wrapper-component.component.css']
})
export class AngularjsWrapperComponentComponent implements OnInit {

  constructor(private el: ElementRef, private upgrade: UpgradeModule) { }

  ngOnInit(): void {

    this.upgrade.bootstrap(this.el.nativeElement, ['ng1module']);
  }

}
