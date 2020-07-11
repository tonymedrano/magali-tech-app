import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtLoaderComponent } from './mt-loader.component';

describe('MtLoaderComponent', () => {
  let component: MtLoaderComponent;
  let fixture: ComponentFixture<MtLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
