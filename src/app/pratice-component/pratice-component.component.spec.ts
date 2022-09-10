import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticeComponentComponent } from './pratice-component.component';

describe('PraticeComponentComponent', () => {
  let component: PraticeComponentComponent;
  let fixture: ComponentFixture<PraticeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
