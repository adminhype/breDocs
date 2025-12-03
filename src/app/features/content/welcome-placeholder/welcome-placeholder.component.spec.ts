import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePlaceholderComponent } from './welcome-placeholder.component';

describe('WelcomePlaceholderComponent', () => {
  let component: WelcomePlaceholderComponent;
  let fixture: ComponentFixture<WelcomePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
