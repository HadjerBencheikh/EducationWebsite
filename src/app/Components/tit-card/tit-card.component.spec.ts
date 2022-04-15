import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitCardComponent } from './tit-card.component';

describe('TitCardComponent', () => {
  let component: TitCardComponent;
  let fixture: ComponentFixture<TitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
