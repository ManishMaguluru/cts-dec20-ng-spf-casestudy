import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllContactsComponent } from './view-all-contacts.component';

describe('ViewAllContactsComponent', () => {
  let component: ViewAllContactsComponent;
  let fixture: ComponentFixture<ViewAllContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
