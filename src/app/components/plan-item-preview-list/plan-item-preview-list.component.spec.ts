import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanItemPreviewListComponent } from './plan-item-preview-list.component';

describe('PlanItemPreviewListComponent', () => {
  let component: PlanItemPreviewListComponent;
  let fixture: ComponentFixture<PlanItemPreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanItemPreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanItemPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
