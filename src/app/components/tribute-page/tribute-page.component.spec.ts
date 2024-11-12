import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TributePageComponent } from './tribute-page.component';

describe('TributePageComponent', () => {
  let component: TributePageComponent;
  let fixture: ComponentFixture<TributePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TributePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TributePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
