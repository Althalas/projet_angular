import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnouncementItemComponent } from './anouncement-item.component';

describe('AnouncementItemComponent', () => {
  let component: AnouncementItemComponent;
  let fixture: ComponentFixture<AnouncementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnouncementItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnouncementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
