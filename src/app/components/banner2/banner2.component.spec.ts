import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner2Component } from './banner2.component';

describe('Banner2Component', () => {
  let component: Banner2Component;
  let fixture: ComponentFixture<Banner2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Banner2Component]
    });
    fixture = TestBed.createComponent(Banner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
