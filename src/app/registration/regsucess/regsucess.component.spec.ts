import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsucessComponent } from './regsucess.component';

describe('RegsucessComponent', () => {
  let component: RegsucessComponent;
  let fixture: ComponentFixture<RegsucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegsucessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegsucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
