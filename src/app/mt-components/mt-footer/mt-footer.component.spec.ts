import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtFooterComponent } from './mt-footer.component';

describe('MtFooterComponent', () => {
  let component: MtFooterComponent;
  let fixture: ComponentFixture<MtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
