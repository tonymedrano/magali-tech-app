import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtFeatureDividerComponent } from './mt-feature-divider.component';

describe('MtFeatureDividerComponent', () => {
  let component: MtFeatureDividerComponent;
  let fixture: ComponentFixture<MtFeatureDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtFeatureDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtFeatureDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
