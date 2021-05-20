import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCPComponent } from './bcp.component';

describe('BCPComponent', () => {
  let component: BCPComponent;
  let fixture: ComponentFixture<BCPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
