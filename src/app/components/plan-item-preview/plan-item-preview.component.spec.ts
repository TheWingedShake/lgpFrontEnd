import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanItemPreviewComponent } from './plan-item-preview.component';

describe('PlanItemPreviewComponent', () => {
  let component: PlanItemPreviewComponent;
  let fixture: ComponentFixture<PlanItemPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanItemPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
