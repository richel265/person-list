import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personinput } from './personinput';

describe('Personinput', () => {
  let component: Personinput;
  let fixture: ComponentFixture<Personinput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personinput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personinput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
