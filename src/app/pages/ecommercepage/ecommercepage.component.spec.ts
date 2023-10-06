import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercepageComponent } from './ecommercepage.component';

describe('EcommercepageComponent', () => {
  let component: EcommercepageComponent;
  let fixture: ComponentFixture<EcommercepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommercepageComponent]
    });
    fixture = TestBed.createComponent(EcommercepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
