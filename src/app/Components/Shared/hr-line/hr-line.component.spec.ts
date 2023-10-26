import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLineComponent } from './hr-line.component';

describe('HrLineComponent', () => {
  let component: HrLineComponent;
  let fixture: ComponentFixture<HrLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrLineComponent]
    });
    fixture = TestBed.createComponent(HrLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
