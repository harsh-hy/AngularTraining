import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchExample } from './switch-example';

describe('SwitchExample', () => {
  let component: SwitchExample;
  let fixture: ComponentFixture<SwitchExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchExample],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
