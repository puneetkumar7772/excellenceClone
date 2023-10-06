import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudDeploymentComponent } from './cloud-deployment.component';

describe('CloudDeploymentComponent', () => {
  let component: CloudDeploymentComponent;
  let fixture: ComponentFixture<CloudDeploymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudDeploymentComponent]
    });
    fixture = TestBed.createComponent(CloudDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
