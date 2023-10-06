import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendcomponentComponent } from './backendcomponent.component';

describe('BackendcomponentComponent', () => {
  let component: BackendcomponentComponent;
  let fixture: ComponentFixture<BackendcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendcomponentComponent]
    });
    fixture = TestBed.createComponent(BackendcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
