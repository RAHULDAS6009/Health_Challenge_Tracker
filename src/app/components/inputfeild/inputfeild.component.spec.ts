import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfeildComponent } from './inputfeild.component';

describe('InputfeildComponent', () => {
  let component: InputfeildComponent;
  let fixture: ComponentFixture<InputfeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputfeildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputfeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
