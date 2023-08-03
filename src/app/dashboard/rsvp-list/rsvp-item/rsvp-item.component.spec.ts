import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpItemComponent } from './rsvp-item.component';

describe('RsvpItemComponent', () => {
  let component: RsvpItemComponent;
  let fixture: ComponentFixture<RsvpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsvpItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsvpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
