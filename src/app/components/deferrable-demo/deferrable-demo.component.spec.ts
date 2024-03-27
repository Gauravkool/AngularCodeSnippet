import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableDemoComponent } from './deferrable-demo.component';

describe('DeferrableDemoComponent', () => {
  let component: DeferrableDemoComponent;
  let fixture: ComponentFixture<DeferrableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferrableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
