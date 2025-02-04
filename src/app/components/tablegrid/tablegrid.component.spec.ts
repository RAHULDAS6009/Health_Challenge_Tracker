import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegridComponent } from './tablegrid.component';

describe('TablegridComponent', () => {
  let component: TablegridComponent;
  let fixture: ComponentFixture<TablegridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablegridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
