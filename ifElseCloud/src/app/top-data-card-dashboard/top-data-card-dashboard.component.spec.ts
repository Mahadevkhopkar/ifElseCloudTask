import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDataCardDashboardComponent } from './top-data-card-dashboard.component';

describe('TopDataCardDashboardComponent', () => {
  let component: TopDataCardDashboardComponent;
  let fixture: ComponentFixture<TopDataCardDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDataCardDashboardComponent]
    });
    fixture = TestBed.createComponent(TopDataCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
