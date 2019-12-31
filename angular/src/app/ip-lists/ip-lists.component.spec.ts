import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpListsComponent } from './ip-lists.component';

describe('IpListsComponent', () => {
  let component: IpListsComponent;
  let fixture: ComponentFixture<IpListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
