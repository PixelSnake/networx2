import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationLabelComponent } from './station-label.component';

describe('StationLabelComponent', () => {
  let component: StationLabelComponent;
  let fixture: ComponentFixture<StationLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
