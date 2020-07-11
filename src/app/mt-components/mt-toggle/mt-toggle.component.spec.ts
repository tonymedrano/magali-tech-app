import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtToggleComponent } from './mt-toggle.component';

describe('MtToggleComponent', () => {
  let component: MtToggleComponent;
  let fixture: ComponentFixture<MtToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
