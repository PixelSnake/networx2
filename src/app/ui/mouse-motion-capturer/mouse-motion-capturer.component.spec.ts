import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseMotionCapturerComponent } from './mouse-motion-capturer.component';

describe('MouseMotionCapturerComponent', () => {
  let component: MouseMotionCapturerComponent;
  let fixture: ComponentFixture<MouseMotionCapturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseMotionCapturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseMotionCapturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
