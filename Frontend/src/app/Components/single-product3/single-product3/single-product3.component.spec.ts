import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProduct3Component } from './single-product3.component';

describe('SingleProduct3Component', () => {
  let component: SingleProduct3Component;
  let fixture: ComponentFixture<SingleProduct3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProduct3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
