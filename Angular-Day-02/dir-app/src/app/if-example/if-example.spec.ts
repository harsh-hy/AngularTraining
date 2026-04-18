import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfExample } from './if-example';

describe('IfExample', () => {
  let component: IfExample;
  let fixture: ComponentFixture<IfExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfExample],
    }).compileComponents();

    fixture = TestBed.createComponent(IfExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
