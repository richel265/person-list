import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persontable } from './persontable';

describe('Persontable', () => {
  let component: Persontable;
  let fixture: ComponentFixture<Persontable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Persontable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Persontable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
