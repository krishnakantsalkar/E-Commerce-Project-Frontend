import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProduct2Component } from './single-product2.component';

describe('SingleProduct2Component', () => {
  let component: SingleProduct2Component;
  let fixture: ComponentFixture<SingleProduct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProduct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
