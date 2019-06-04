import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanFormComponent } from './deliveryman-form.component';

describe('DeliverymanFormComponent', () => {
  let component: DeliverymanFormComponent;
  let fixture: ComponentFixture<DeliverymanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
