import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListsComponent } from './app-lists.component';

describe('AppListsComponent', () => {
  let component: AppListsComponent;
  let fixture: ComponentFixture<AppListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
