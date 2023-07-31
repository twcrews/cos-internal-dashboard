import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyContentComponent } from './empty-content.component';

describe('EmptyContentComponent', () => {
  let component: EmptyContentComponent;
  let fixture: ComponentFixture<EmptyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
