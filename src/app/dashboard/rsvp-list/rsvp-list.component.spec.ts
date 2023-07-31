import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpListComponent } from './rsvp-list.component';

describe('RsvpListComponent', () => {
  let component: RsvpListComponent;
  let fixture: ComponentFixture<RsvpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsvpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsvpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
