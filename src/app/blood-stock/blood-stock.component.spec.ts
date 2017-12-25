import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodStockComponent } from './blood-stock.component';

describe('BloodStockComponent', () => {
  let component: BloodStockComponent;
  let fixture: ComponentFixture<BloodStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
