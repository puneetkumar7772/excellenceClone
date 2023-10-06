import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileapplicationComponent } from './mobileapplication.component';

describe('MobileapplicationComponent', () => {
  let component: MobileapplicationComponent;
  let fixture: ComponentFixture<MobileapplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileapplicationComponent]
    });
    fixture = TestBed.createComponent(MobileapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
