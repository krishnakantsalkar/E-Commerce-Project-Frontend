import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProduct1Component } from './single-product1.component';

describe('SingleProduct1Component', () => {
  let component: SingleProduct1Component;
  let fixture: ComponentFixture<SingleProduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
