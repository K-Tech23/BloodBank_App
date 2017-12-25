import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieverslistComponent } from './recieverslist.component';

describe('RecieverslistComponent', () => {
  let component: RecieverslistComponent;
  let fixture: ComponentFixture<RecieverslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieverslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieverslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
