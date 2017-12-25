import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorslistComponent } from './donorslist.component';

describe('DonorslistComponent', () => {
  let component: DonorslistComponent;
  let fixture: ComponentFixture<DonorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
