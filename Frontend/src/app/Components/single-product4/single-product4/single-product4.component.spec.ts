import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProduct4Component } from './single-product4.component';

describe('SingleProduct4Component', () => {
  let component: SingleProduct4Component;
  let fixture: ComponentFixture<SingleProduct4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProduct4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
