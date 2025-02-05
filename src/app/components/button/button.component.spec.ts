import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [], // Empty since component has no imports
      declarations: [], // Empty since it's a standalone component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Input text', () => {
    it('should set input text correctly', () => {
      const testText = 'Test Button';
      component.text = testText;
      fixture.detectChanges();
      const buttonEl = fixture.nativeElement.querySelector('button');
      expect(buttonEl.textContent.trim()).toBe(testText);
    });
  });

  describe('Click event', () => {
    it('should emit event when clicked', () => {
      let clicked = false;
      component.onClickin.subscribe(() => {
        clicked = true;
      });

      const buttonEl = fixture.nativeElement.querySelector('button');
      buttonEl.click();
      
      expect(clicked).toBe(true);
    });

    it('should emit through onClick method', () => {
      spyOn(component.onClickin, 'emit');
      
      component.onClick();
      
      expect(component.onClickin.emit).toHaveBeenCalled();
    });
  });
});