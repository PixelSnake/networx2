import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarTabComponent } from './menu-bar-tab.component';

describe('MenuBarTabComponent', () => {
  let component: MenuBarTabComponent;
  let fixture: ComponentFixture<MenuBarTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBarTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
