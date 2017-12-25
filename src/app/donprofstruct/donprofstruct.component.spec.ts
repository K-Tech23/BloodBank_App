import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonprofstructComponent } from './donprofstruct.component';

describe('DonprofstructComponent', () => {
  let component: DonprofstructComponent;
  let fixture: ComponentFixture<DonprofstructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonprofstructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonprofstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
