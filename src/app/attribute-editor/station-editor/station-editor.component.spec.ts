import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationEditorComponent } from './station-editor.component';

describe('StationEditorComponent', () => {
  let component: StationEditorComponent;
  let fixture: ComponentFixture<StationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
