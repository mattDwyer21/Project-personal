import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VALORANTComponent } from './valorant.component';

describe('VALORANTComponent', () => {
  let component: VALORANTComponent;
  let fixture: ComponentFixture<VALORANTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VALORANTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VALORANTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
