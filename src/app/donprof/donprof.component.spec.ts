import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonprofComponent } from './donprof.component';

describe('DonprofComponent', () => {
  let component: DonprofComponent;
  let fixture: ComponentFixture<DonprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
