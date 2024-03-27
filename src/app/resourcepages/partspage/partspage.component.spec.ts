import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartspageComponent } from './partspage.component';

describe('PartspageComponent', () => {
  let component: PartspageComponent;
  let fixture: ComponentFixture<PartspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
