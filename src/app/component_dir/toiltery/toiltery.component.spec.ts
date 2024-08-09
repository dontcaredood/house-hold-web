import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToilteryComponent } from './toiltery.component';

describe('ToilteryComponent', () => {
  let component: ToilteryComponent;
  let fixture: ComponentFixture<ToilteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToilteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToilteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
