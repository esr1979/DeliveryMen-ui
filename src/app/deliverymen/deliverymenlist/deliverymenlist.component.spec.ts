import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymenlistComponent } from './deliverymenlist.component';

describe('DeliverymenlistComponent', () => {
  let component: DeliverymenlistComponent;
  let fixture: ComponentFixture<DeliverymenlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymenlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
