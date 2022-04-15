import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgbarComponent } from './msgbar.component';

describe('MsgbarComponent', () => {
  let component: MsgbarComponent;
  let fixture: ComponentFixture<MsgbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
