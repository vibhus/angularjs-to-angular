import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularjsWrapperComponentComponent } from './angularjs-wrapper-component.component';

describe('AngularjsWrapperComponentComponent', () => {
  let component: AngularjsWrapperComponentComponent;
  let fixture: ComponentFixture<AngularjsWrapperComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularjsWrapperComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularjsWrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
