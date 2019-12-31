import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIdListsComponent } from './device-id-lists.component';

describe('DeviceIdListsComponent', () => {
  let component: DeviceIdListsComponent;
  let fixture: ComponentFixture<DeviceIdListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIdListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIdListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
