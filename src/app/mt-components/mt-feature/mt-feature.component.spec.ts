import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtFeatureComponent } from './mt-feature.component';

describe('MtFeatureComponent', () => {
  let component: MtFeatureComponent;
  let fixture: ComponentFixture<MtFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
