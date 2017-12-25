import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecprofComponent } from './recprof.component';

describe('RecprofComponent', () => {
  let component: RecprofComponent;
  let fixture: ComponentFixture<RecprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
